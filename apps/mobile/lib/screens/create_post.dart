import "dart:io";

import "package:flutter/material.dart";
import "package:image_picker/image_picker.dart";
import "package:provider/provider.dart";
import "package:tea_share/models/user_model.dart";
import "package:tea_share/services/posts_service.dart";
import "package:tea_share/services/theme_service.dart";
import "package:tea_share/services/users_service.dart";
import "package:tea_share/widgets/top_bar.dart";

class Create extends StatefulWidget {
  const Create({ super.key });

  @override
  State<Create> createState() => _CreateState();
}

class _CreateState extends State<Create> {
  final TextEditingController _titleInputController = TextEditingController();
  final TextEditingController _aboutInputController = TextEditingController();

  XFile? _image;
  bool _isLoading = false;
  String _errorMessage = "";
  String _titleInvalidMessage = "";

  @override
  void dispose() {
    _titleInputController.dispose();
    _aboutInputController.dispose();

    super.dispose();
  }
  
  Future<void> _createPost() async {
    if (_image == null) return setState(() => _errorMessage = "No image selected.");

    setState(() => _isLoading = true);

    final UserModel? user = await context.read<UserService>().user;

    if (user == null) return;

    final PostsServiceResponse response = await context.read<PostService>().createPost(
      title: _titleInputController.text,
      description: _aboutInputController.text,
      userId: user.userId!,
      postImage: _image!,
    );

    if (response.successful) {
      Navigator.pushNamed(context, "/");
      return;
    }

    setState(() {
      _errorMessage = response.errorMessage ?? "An error occured when trying to create your post.";
      _isLoading = false;
    });
  }

  Future<void> _pickImage(ImageSource imageSource) async {
    final ImagePicker imagePicker = ImagePicker();

    final XFile? image = await imagePicker.pickImage(source: imageSource);

    if (image != null) setState(() => _image = image);
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
                      borderRadius: BorderRadius.circular(10),
                    ),
                  ),
                ),
                child: _image != null ? Padding(
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
                ) : Container(
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
              ),
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 10),
                child: TextFormField(
                  controller: _titleInputController,
                  onChanged: (String value) => setState(() {
                    if (value.isNotEmpty && value.length < 4) {
                      _titleInvalidMessage = "Title must be 4 characters or longer.";
                      return;
                    }

                    if (value.length > 255) {
                      _titleInvalidMessage = "Title too long.";
                      return;
                    }

                    _titleInvalidMessage = "";
                  }),
                  decoration: InputDecoration(
                    border: OutlineInputBorder(borderRadius: BorderRadius.circular(10)),
                    labelText: "Title",
                    errorText: _titleInvalidMessage != "" ? _titleInvalidMessage : null,
                  ),
                ),
              ),
              TextFormField(
                controller: _aboutInputController,
                decoration: InputDecoration(
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(10)),
                  labelText: "About your post",
                ),
              ),
              if (_errorMessage != "")
                Padding(
                  padding: const EdgeInsets.only(top: 10),
                  child: Text(_errorMessage,
                    textAlign: TextAlign.center,
                    style: const TextStyle(
                      color: Colors.red
                    ),
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
                  onPressed: _isLoading ? null : _createPost,
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      Padding(
                        padding: EdgeInsets.only(
                          left: _isLoading ? 16 : 0
                        ),
                        child: const Text("Create Post!",
                          style: TextStyle(
                            fontWeight: FontWeight.bold,
                          )
                        ),
                      ),
                      if (_isLoading)
                        Container(
                          height: 20,
                          width: 30,
                          padding: const EdgeInsets.only(left: 10),
                          child: const CircularProgressIndicator(
                            color: Colors.white,
                            strokeWidth: 3,
                          ),
                        )
                    ],
                  )
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}