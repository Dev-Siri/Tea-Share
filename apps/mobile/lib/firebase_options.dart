import 'package:firebase_core/firebase_core.dart' show FirebaseOptions;
import 'package:flutter/foundation.dart' show defaultTargetPlatform, TargetPlatform;

/*
  The keys need to be kept secret.
  In /env, create a file called `secret_keys.dart`,
  Create a new Firebase project for Flutter (May require FlutterFire CLI)
  and copy the credentials to the `secret_keys.dart` file (reference the names from the example file)
*/
import 'package:tea_share/env/secret_keys.dart';

class DefaultFirebaseOptions {
  static FirebaseOptions get currentPlatform {
    switch (defaultTargetPlatform) {
      case TargetPlatform.android:
        return android;
      case TargetPlatform.iOS:
        return ios;
      default:
        throw UnsupportedError('DefaultFirebaseOptions are not supported for this platform.');
    }
  }

  static const FirebaseOptions android = FirebaseOptions(
    apiKey: FLUTTER_ANDROID_FIREBASE_API_KEY,
    appId: FLUTTER_ANDROID_FIREBASE_APP_ID,
    messagingSenderId: FLUTTER_CROSS_PLATFORM_FIREBASE_MESSAGING_SENDER_ID,
    projectId: FLUTTER_CROSS_PLATFORM_FIREBASE_PROJECT_ID,
    databaseURL: FLUTTER_CROSS_PLATFORM_FIREBASE_DATABASE_URL,
    storageBucket: FLUTTER_CROSS_PLATFORM_FIREBASE_STORAGE_BUCKET,
  );

  static const FirebaseOptions ios = FirebaseOptions(
    apiKey: FLUTTER_IOS_FIREBASE_API_KEY,
    appId: FLUTTER_IOS_FIREBASE_APP_ID,
    messagingSenderId: FLUTTER_CROSS_PLATFORM_FIREBASE_MESSAGING_SENDER_ID,
    projectId: FLUTTER_CROSS_PLATFORM_FIREBASE_PROJECT_ID,
    databaseURL: FLUTTER_CROSS_PLATFORM_FIREBASE_DATABASE_URL,
    storageBucket: FLUTTER_CROSS_PLATFORM_FIREBASE_STORAGE_BUCKET,
    androidClientId: FLUTTER_IOS_FIREBASE_ANDROID_CLIENT_ID,
    iosClientId: FLUTTER_IOS_FIREBASE_IOS_CLIENT_ID,
    iosBundleId: FLUTTER_IOS_FIREBASE_BUNDLE_ID,
  );
}