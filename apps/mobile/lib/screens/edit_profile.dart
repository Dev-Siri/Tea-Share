import "dart:io";

import "package:cached_network_image/cached_network_image.dart";
import "package:flutter/material.dart";
import "package:image_picker/image_picker.dart";
import "package:provider/provider.dart";
import "package:skeletons/skeletons.dart";
import "package:tea_share/models/user_model.dart";
import "package:tea_share/services/theme_service.dart";
import "package:tea_share/services/users_service.dart";
import "package:tea_share/utils/error_dialog.dart";
import "package:tea_share/widgets/top_bar.dart";

class EditProfile extends StatefulWidget {
  const EditProfile({ super.key });

  @override
  State<EditProfile> createState() => _EditProfileState();
}

class _EditProfileState extends State<EditProfile> with ErrorDialog {
  final TextEditingController _usernameInputController = TextEditingController();
  final TextEditingController _emailInputController = TextEditingController();

  String _currentPicture = "";
  XFile? _newPicture;

  @override
  void initState() {
    _populateFields();

    super.initState();
  }

  @override
  void dispose() {
    _usernameInputController.dispose();
    _emailInputController.dispose();

    super.dispose();
  }

  Future<void> _updateUser() async {
    if (_newPicture == null) return showErrorDialog(context, "Failed to update your profile.");

    await context.read<UserService>().updateProfile(
      username: _usernameInputController.text,
      userImage: await _newPicture!.readAsBytes(),
      email: _emailInputController.text,
    );

    Navigator.pop(context);
  }

  Future<void> _pickImage(ImageSource imageSource) async {
    final ImagePicker imagePicker = ImagePicker();

    final XFile? image = await imagePicker.pickImage(source: imageSource);

    if (image != null) setState(() => _newPicture = image);
  }

  Future<void> _populateFields() async {
    final UserModel? user = await context.read<UserService>().user;

    if (user == null) return;

    _usernameInputController.text = user.username;
    _emailInputController.text = user.email;
    setState(() => _currentPicture = user.userImage);
  }
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: context.watch<DarkThemeService>().darkTheme ? Colors.black : Colors.white,
      appBar: const TopBar(showBackButton: true),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(20),
          child: Column(
            children: <Widget>[
              ElevatedButton(
                onPressed: () => _pickImage(ImageSource.gallery),
                style: ButtonStyle(
                  padding: const MaterialStatePropertyAll(EdgeInsets.zero),
                  shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                    RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(100),
                    ),
                  ),
                ),
                child: _currentPicture != "" ? CircleAvatar(
                  radius: 100,
                  backgroundImage: _newPicture != null
                    ? Image.file(File(_newPicture!.path)).image
                    : CachedNetworkImageProvider(_currentPicture),
                ) : SkeletonAvatar(
                  style: SkeletonAvatarStyle(
                    height: 200,
                    width: 200,
                    borderRadius: BorderRadius.circular(100)
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 10),
                child: TextField(
                  controller: _usernameInputController,
                  decoration: const InputDecoration(
                    border: OutlineInputBorder(),
                    labelText: "Username",
                  ),
                ),
              ),
              TextField(
                controller: _emailInputController,
                decoration: const InputDecoration(
                  border: OutlineInputBorder(),
                  labelText: "Email",
                ),
              ),
              Container(
                margin: const EdgeInsets.only(top: 10),
                width: 400,
                height: 50,
                child: ElevatedButton(
                  onPressed: _updateUser,
                  style: ButtonStyle(
                    backgroundColor: MaterialStatePropertyAll(Theme.of(context).primaryColor),
                    foregroundColor: const MaterialStatePropertyAll(Colors.white),
                    shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                      RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(10),
                      ),
                    ),
                  ),
                  child: const Text("Update Profile"),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}