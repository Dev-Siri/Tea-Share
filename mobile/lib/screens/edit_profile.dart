import 'dart:io';

import 'package:flutter_expandable_fab/flutter_expandable_fab.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:image_picker/image_picker.dart';
import 'package:provider/provider.dart';
import 'package:flutter/material.dart';
import 'package:tea_share/models/user_model.dart' as user_model;

import 'package:tea_share/services/authentication_service.dart';
import 'package:tea_share/services/users_service.dart';

class EditProfile extends StatefulWidget {
  const EditProfile({ super.key });

  @override
  State<EditProfile> createState() => _EditProfileState();
}

class _EditProfileState extends State<EditProfile> {
  final TextEditingController _usernameInputController = TextEditingController();
  final TextEditingController _emailInputController = TextEditingController();
  
  final GlobalKey<ExpandableFabState> _expandableFabKey = GlobalKey<ExpandableFabState>();

  late user_model.User _mongoUser;

  XFile? _newPicture;
  bool _isLoading = false;

  @override
  void initState() {
    if (mounted) {
      final User user = context.read<AuthenticationService>().user!;

      _usernameInputController.text = user.displayName!;
      _emailInputController.text = user.email!;

      context.read<UserService>().fetchUserByQuery(
        query: user.displayName!
      ).then((user_model.User fetchedUser) {
        if (mounted) {
          setState(() => _mongoUser = fetchedUser);
        }
      });
    }
    
    super.initState();
  }

  @override
  void dispose() {
    _usernameInputController.dispose();
    _emailInputController.dispose();

    super.dispose();
  }

  Future<void> _updateUser() async {
    if (_newPicture == null) {
      return showDialog(
        context: context,
        builder: (_) => AlertDialog(
          elevation: 5,
          title: const Text('Error'),
          content: const Text('Failed to update your profile.'),
          actions: <Widget>[
            TextButton(
              onPressed: () => Navigator.pop(context),
              child: const Text('Ok'),
            ),
          ],
        )
      );
    }

    await context.read<AuthenticationService>().updateProfile(
      user: user_model.User(
        username: _usernameInputController.text,
        email: _emailInputController.text,
        image: _newPicture!.path,
        id: _mongoUser.id
      )
    );
    Navigator.pop(context);
  }

  Future<void> _pickImage(String imageInputOption) async {
    final ImagePicker imagePicker = ImagePicker();

    final XFile? image = await imagePicker.pickImage(
      source: imageInputOption == "Gallery" ? ImageSource.gallery : ImageSource.camera,
      maxHeight: 300,
      maxWidth: 300,
    );
    
    if (image != null) setState(() => _newPicture = image);

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
                controller: _usernameInputController,
                decoration: const InputDecoration(
                  border: OutlineInputBorder(),
                  labelText: 'Username',
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(top: 10),
                child: TextField(
                  controller: _emailInputController,
                  decoration: const InputDecoration(
                    border: OutlineInputBorder(),
                    labelText: 'Email',
                  ),
                ),
              ),
              Container(
                margin: const EdgeInsets.only(top: 10),
                width: 400,
                height: 50,
                child: ElevatedButton(
                  onPressed: _updateUser,
                  child: const Text('Update Profile'),
                ),
              ),
              Visibility(
                visible: _newPicture != null,
                child: Padding(
                  padding: const EdgeInsets.only(top: 10),
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(10),
                    child: Image.file(
                      File(_newPicture?.path ?? ""),
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