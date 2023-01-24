import 'dart:io';

import 'package:flutter_expandable_fab/flutter_expandable_fab.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:image_picker/image_picker.dart';
import 'package:provider/provider.dart';
import 'package:flutter/material.dart';

import 'package:tea_share/models/post_model.dart';
import 'package:tea_share/services/authentication_service.dart';
import 'package:tea_share/services/posts_service.dart';

class Create extends StatefulWidget {
  const Create({ super.key });

  @override
  State<Create> createState() => _CreateState();
}

class _CreateState extends State<Create> {
  final TextEditingController _titleInputController = TextEditingController();
  final TextEditingController _aboutInputController = TextEditingController();

  final GlobalKey<ExpandableFabState> _expandableFabKey = GlobalKey<ExpandableFabState>();

  XFile? _image;

  @override
  void dispose() {
    _titleInputController.dispose();
    _aboutInputController.dispose();

    super.dispose();
  }
  
  Future<void> _createPost() async {
    try {
      if (_image == null) throw Error();

      final User? user = context.read<AuthenticationService>().user;

      await context.read<PostService>().createPost(
        post: Post(
          title: _titleInputController.text,
          description: _aboutInputController.text,
          author: user!.displayName!,
          authorImage: user.photoURL!,
          image: _image!.path,
          people: [],
          peopleImage: [],
          id: "",
          createdAt: "",
        )
      );

      Navigator.pushNamed(context, "/");
    } catch (error) {
      showDialog(
        context: context,
        builder: (_) => AlertDialog(
          elevation: 5,
          title: const Text('Error'),
          content: const Text('Failed to create post.'),
          actions: <Widget>[
            TextButton(
              onPressed: () => Navigator.pop(context),
              child: const Text('Ok'),
            ),
          ],
        )
      );
    }
  }

  Future<void> _pickImage(String imageInputOption) async {
    final ImagePicker imagePicker = ImagePicker();

    final XFile? image = await imagePicker.pickImage(
      source: imageInputOption == "Gallery" ? ImageSource.gallery : ImageSource.camera,
      maxHeight: 300,
      maxWidth: 300,
    );
    
    if (image != null) setState(() => _image = image);

    _expandableFabKey.currentState!.toggle();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.blue,
        leading: BackButton(
          onPressed: () => Navigator.pop(context),
        ),
        title: const Text('Tea Share'),
      ),
      floatingActionButtonLocation: ExpandableFab.location,
      floatingActionButton: ExpandableFab(
        key: _expandableFabKey,
        backgroundColor: Colors.blue,
        type: ExpandableFabType.up,
        distance: 80,
        child: const Icon(Icons.cloud_upload,
          color: Colors.white,
        ),
        closeButtonStyle: const ExpandableFabCloseButtonStyle(
          backgroundColor: Colors.blue,
          foregroundColor: Colors.white
        ),
        children: <Widget>[
          FloatingActionButton(
            backgroundColor: Colors.blue,
            tooltip: 'Open Gallery',
            child: const Icon(Icons.photo_library_rounded,
              color: Colors.white,
            ),
            onPressed: () => _pickImage("Gallery"),
          ),
          FloatingActionButton(
            backgroundColor: Colors.blue,
            tooltip: 'Capture Photo',
            child: const Icon(Icons.camera_alt,
              color: Colors.white,
            ),
            onPressed: () => _pickImage("Camera"),
          ),
        ],
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(20),
          child: Column(
            children: <Widget>[
              TextField(
                controller: _titleInputController,
                decoration: const InputDecoration(
                  border: OutlineInputBorder(),
                  labelText: 'Title',
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(top: 10),
                child: TextField(
                  controller: _aboutInputController,
                  decoration: const InputDecoration(
                    border: OutlineInputBorder(),
                    labelText: 'About your post',
                  ),
                ),
              ),
              Visibility(
                visible: _image != null,
                child: Container(
                  margin: const EdgeInsets.only(top: 20),
                  width: 400,
                  height: 50,
                  child: ElevatedButton.icon(
                    onPressed: () => setState(() => _image = null),
                    icon: const Icon(Icons.image_not_supported),
                    label: const Text('Clear Selected Image'),
                  ),
                ),
              ),
              Container(
                margin: const EdgeInsets.only(top: 10),
                width: 400,
                height: 50,
                child: ElevatedButton(
                  onPressed: _createPost,
                  child: const Text('Post!'),
                ),
              ),
              Visibility(
                visible: _image != null,
                child: Padding(
                  padding: const EdgeInsets.only(top: 10),
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(10),
                    child: Image.file(
                      File(_image?.path ?? ""),
                      height: 400,
                      width: 400,
                      fit: BoxFit.fill,
                    ),
                  ),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}