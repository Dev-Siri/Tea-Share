import 'dart:io';
import 'dart:math';

import 'package:firebase_storage/firebase_storage.dart';

mixin Storage {
  final FirebaseStorage _firebaseStorage = FirebaseStorage.instance;

  String _getImageName() {
    final Random random = Random();
    const String characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    return String.fromCharCodes(Iterable.generate(
      characters.length,
      (_) => characters.codeUnitAt(random.nextInt(characters.length))
    ));
  }

  Future<String?> uploadImage({ required String imagePath, required String type }) async {
    final String imageName = _getImageName();
    final Reference imageRef = _firebaseStorage.ref("$type/$imageName");
    final File uploadableImage = File(imagePath);

    try {
      await imageRef.putFile(uploadableImage);

      final String imageDownloadURL = await imageRef.getDownloadURL();

      return imageDownloadURL;
    } on FirebaseException catch (error) {
      return error.message;
    }
  }
}