import 'dart:io';
import 'dart:math';

import 'package:firebase_storage/firebase_storage.dart';

class StorageResponse {
  final bool successful;

  String? errorMessage;
  String? imageUrl;

  StorageResponse({
    required this.successful,
    this.imageUrl,
    this.errorMessage,
  });
}

mixin Storage {
  final FirebaseStorage _firebaseStorage = FirebaseStorage.instance;

  String _getImageName() {
    final Random random = Random();
    const String characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    return String.fromCharCodes(
      Iterable.generate(
        characters.length,
        (_) => characters.codeUnitAt(random.nextInt(characters.length))
      )
    );
  }

  Future<StorageResponse> uploadImage({ required String imagePath, required String type }) async {
    final String imageName = _getImageName();
    final Reference imageRef = _firebaseStorage.ref("$type/$imageName");
    final File uploadableImage = File(imagePath);

    try {
      await imageRef.putFile(uploadableImage);

      final String imageDownloadURL = await imageRef.getDownloadURL();

      return StorageResponse(
        successful: true,
        imageUrl: imageDownloadURL
      );
    } on FirebaseException catch (error) {
      return StorageResponse(
        successful: false,
        errorMessage: error.message
      );
    }
  }
}