import 'package:firebase_auth/firebase_auth.dart';
import 'package:tea_share/models/user_model.dart' as user_model;

import 'package:tea_share/services/users_service.dart';
import 'package:tea_share/utils/firebase_storage.dart';

class AuthenticationService with Storage {
  final FirebaseAuth _firebaseAuth;
  final UserService _userService = UserService();

  AuthenticationService(this._firebaseAuth);

  User? get user => _firebaseAuth.currentUser;

  Future<void> signOut() async => _firebaseAuth.signOut();

  Future<String?> login({ required String email, required String password }) async {
    try {
      await _firebaseAuth.signInWithEmailAndPassword(email: email, password: password);
      return 'Logged in';
    } on FirebaseAuthException catch (error) {
      return error.message;
    }
  }

  Future<String?> signUp({ required String email, required String password, required String username }) async {
    try {
      const String defaultImageUrl = 'https://firebasestorage.googleapis.com/v0/b/tea-share-e6fd0.appspot.com/o/Unknown.png?alt=media&token=398e8deb-b72f-4e86-81a9-a27595986cdb';

      await _firebaseAuth.createUserWithEmailAndPassword(email: email, password: password);
      await _firebaseAuth.currentUser?.updatePhotoURL(defaultImageUrl);
      await _firebaseAuth.currentUser?.updateDisplayName(username);
      await _userService.createUser(
        user_model.User(
          email: email,
          image: defaultImageUrl,
          username: username,
          id: ""
        )
      );
      
      return 'Signed up';
    } on FirebaseAuthException catch (error) {
      return error.message;
    }
  }

  Future<String?> signInWithGoogle() async {
    try {
      await _firebaseAuth.signInWithProvider(GoogleAuthProvider());
      await _userService.createUser(
        user_model.User(
          username: _firebaseAuth.currentUser!.displayName!,
          email: _firebaseAuth.currentUser!.email!,
          image: _firebaseAuth.currentUser!.photoURL!,
          id: ""
        )
      );
      
      return 'Signed in with Google';
    } on FirebaseAuthException catch (error) {
      return error.message;
    }
  }

  Future<String?> updateProfile({ required user_model.User user }) async {
    try {
      final String? imageURL = await uploadImage(imagePath: user.image, type: "users");

      await _firebaseAuth.currentUser!.updateDisplayName(user.username);
      await _firebaseAuth.currentUser!.updateEmail(user.email);
      await _firebaseAuth.currentUser!.updatePhotoURL(imageURL);

      await _userService.updateProfile(user: user);

      return 'Updated Profile';
    } on FirebaseAuthException catch (error) {
      return error.message;
    }
  }
}