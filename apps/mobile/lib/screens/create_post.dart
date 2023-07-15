import "dart:io";

import "package:flutter/material.dart";
import "package:image_picker/image_picker.dart";
import "package:provider/provider.dart";
import "package:tea_share/models/user_model.dart";
import "package:tea_share/services/posts_service.dart";
import "package:tea_share/services/users_service.dart";
import "package:tea_share/utils/error_dialog.dart";

class Create extends StatefulWidget {
  const Create({ super.key });

  @override
  State<Create> createState() => _CreateState();
}

class _CreateState extends State<Create> with ErrorDialog {
  final TextEditingController _titleInputController = TextEditingController();
  final TextEditingController _aboutInputController = TextEditingController();

  XFile? _image;

  @override
  void dispose() {
    _titleInputController.dispose();
    _aboutInputController.dispose();

    super.dispose();
  }
  
  Future<void> _createPost() async {
    if (_image == null) return showErrorDialog(context, "No image selected.");

    final UserModel? user = await context.read<UserService>().user;

    if (user == null) return;

    final PostsServiceResponse response = await context.read<PostService>().createPost(
      title: _titleInputController.text,
      description: _aboutInputController.text,
      userId: user.userId!,
      postImage: await _image!.readAsBytes(),
    );

    if (response.successful) {
      Navigator.pushNamed(context, "/");
      return;
    }

    showErrorDialog(context, response.errorMessage!);
  }

  Future<void> _pickImage(ImageSource imageSource) async {
    final ImagePicker imagePicker = ImagePicker();

    final XFile? image = await imagePicker.pickImage(source: imageSource);
    
    if (image != null) setState(() => _image = image);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: BackButton(
          onPressed: () => Navigator.pop(context),
        ),
        title: const Text("Create A Post"),
      ),
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
                      borderRadius: BorderRadius.circular(10),
                    ),
                  ),
                ),
                child: Visibility(
                  visible: _image != null,
                  replacement: Container(
                    height: 400,
                    width: 400,
                    padding: const EdgeInsets.all(40),
                    alignment: Alignment.center,
                    child: const Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: <Widget>[
                        Icon(Icons.image,
                          size: 100,
                        ),
                        Text("Choose Image",
                          style: TextStyle(fontSize: 21),
                        ),
                        Text("Preferably, choose images that are 400x400 in size.",
                          textAlign: TextAlign.center,
                          style: TextStyle(fontSize: 18),
                        ),
                      ],
                    ),
                  ),
                  child: Padding(
                    padding: const EdgeInsets.only(top: 10),
                    child: ClipRRect(
                      borderRadius: const BorderRadius.all(Radius.circular(10)),
                      child: Image.file(
                        File(_image?.path ?? ""),
                        height: 400,
                        width: 400,
                        fit: BoxFit.fill,
                      ),
                    ),
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 10),
                child: TextField(
                  controller: _titleInputController,
                  decoration: InputDecoration(
                    border: OutlineInputBorder(borderRadius: BorderRadius.circular(10)),
                    labelText: "Title",
                  ),
                ),
              ),
              TextField(
                controller: _aboutInputController,
                decoration: InputDecoration(
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(10)),
                  labelText: "About your post",
                ),
              ),
              Container(
                margin: const EdgeInsets.only(top: 10),
                width: 400,
                height: 45,
                child: ElevatedButton(
                  style: ButtonStyle(
                    backgroundColor: MaterialStatePropertyAll(Theme.of(context).primaryColor),
                    foregroundColor: const MaterialStatePropertyAll(Colors.white),
                    shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                      RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(10),
                      ),
                    ),
                  ),
                  onPressed: _createPost,
                  child: const Text("Create Post!"),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}