import "dart:convert";

import "package:flutter/foundation.dart";
import "package:google_sign_in/google_sign_in.dart";
import "package:http/http.dart" as http;
import "package:jwt_decoder/jwt_decoder.dart";
import "package:shared_preferences/shared_preferences.dart";
import "package:tea_share/constants.dart";
import "package:tea_share/models/user_model.dart";

class UsersServiceResponse {
  final bool successful;
  
  List<UserModel>? users;
  String? errorMessage;

  UsersServiceResponse({
    required this.successful,
    this.users,
    this.errorMessage,
  });
}

class UserService {
  static const _usersUrl = "$backendUrl/users";
  static const Map<String, String> _headers = {
    "Content-Type": "application/json; charset=UTF-8",
  };

  Future<UserModel?> get user async {
    final SharedPreferences sharedPreferences = await SharedPreferences.getInstance();
    final String? authToken = sharedPreferences.getString("auth_token");

    if (authToken != null) {
      final Map<String, dynamic> userMap = JwtDecoder.decode(authToken);
      return UserModel.fromJson(userMap);
    }

    return null;
  }

  List<UserModel> _decodeUsers(http.Response response) {
    final List? body = jsonDecode(response.body);

    if (body == null) return [];

    final List<UserModel> users = body.map((final user) => UserModel.fromJson(user)).toList();

    return users;
  }

  Future<void> updateProfile({ required String username, required Uint8List userImage, required String email }) async {
    final currentUser = await user;

    if (currentUser == null) return;

    await http.put(
      Uri.parse("$_usersUrl/${currentUser.userId}/update"),
      headers: _headers,
      body: jsonEncode({
        "username": username,
        "userImage": userImage,
        "email": email,
      })
    );
  }

  Future<UsersServiceResponse> login({ required String email, required String password }) async {
    final http.Response response = await http.post(
      Uri.parse("$_usersUrl/login"),
      headers: _headers,
      body: jsonEncode({
        "email": email,
        "password": password
      })
    );

    if (response.statusCode == 200) {
      Map<String, dynamic> authResponse = jsonDecode(response.body);

      final SharedPreferences sharedPreferences = await SharedPreferences.getInstance();
      sharedPreferences.setString("auth_token", authResponse["token"]!);

      return UsersServiceResponse(successful: true);
    }

    return UsersServiceResponse(
      successful: false,
      errorMessage: response.body
    );
  }

  Future<UsersServiceResponse> signInWithGoogle() async {
    try {
      final GoogleSignIn googleSignIn = GoogleSignIn(
        scopes: [
          "email",
          "profile",
        ],
      );
      final GoogleSignInAccount? account = await googleSignIn.signIn();

      if (account == null) {
        return UsersServiceResponse(
          successful: false,
          errorMessage: "Something went wrong. We weren't able to get your account information."
        );
      }

      final http.Response signupResponse = await http.post(
        Uri.parse("$_usersUrl/signup"),
        headers: _headers,
        body: jsonEncode({
          "authProvider": "google",
          "username": account.displayName,
          "userImage": account.photoUrl,
          "email": account.email,
        })
      );

      if (signupResponse.statusCode == 201) {
        Map<String, dynamic> authResponse = jsonDecode(signupResponse.body);

        final SharedPreferences sharedPreferences = await SharedPreferences.getInstance();
        sharedPreferences.setString("auth_token", authResponse["token"]!);

        return UsersServiceResponse(successful: true);
      }

      return UsersServiceResponse(
        successful: false,
        errorMessage: signupResponse.body
      );
    } catch (error) {
      return UsersServiceResponse(
        successful: false,
        errorMessage: "An error occured while trying to log you in with Google."
      );
    }
  }

  Future<void> signOut() async {
    final SharedPreferences sharedPreferences = await SharedPreferences.getInstance();

    sharedPreferences.remove("auth_token");
  }

  Future<UsersServiceResponse> signup({ required String username, required String email, required String password }) async {
    final http.Response defaultPfpResponse = await http.get(Uri.parse("$randomPfpUrl/profile-image?name=$username"));
    final Uint8List imageBytes = defaultPfpResponse.bodyBytes;
    final String base64Image = base64Encode(imageBytes);
    final String? mimeType = defaultPfpResponse.headers["content-type"];

    final http.Response signupResponse = await http.post(
      Uri.parse("$_usersUrl/signup"),
      headers: _headers,
      body: jsonEncode({
        "username": username,
        "userImage": "data:$mimeType;base64,$base64Image",
        "email": email,
        "password": password,
      })
    );

    if (signupResponse.statusCode == 201) {
      Map<String, dynamic> authResponse = jsonDecode(signupResponse.body);

      final SharedPreferences sharedPreferences = await SharedPreferences.getInstance();
      sharedPreferences.setString("auth_token", authResponse["token"]!);

      return UsersServiceResponse(successful: true);
    }

    return UsersServiceResponse(
      successful: false,
      errorMessage: signupResponse.body
    );
  }

  Future<UsersServiceResponse> fetchUsers({ int? limit, int? page }) async {
    final http.Response response = await http.get(Uri.parse("$_usersUrl?page=$page&limit=$limit"));

    if (response.statusCode == 200) {
      final List<UserModel> users = await compute(_decodeUsers, response);

      return UsersServiceResponse(
        successful: true,
        users: users
      );
    }

    return UsersServiceResponse(
      successful: false,
      errorMessage: "Failed to get people.\nThe server responded with a status code of ${response.statusCode}"
    );
  }

  Future<UsersServiceResponse> fetchUserByName({ required String name, required int page, required int limit, bool? exact = false }) async {
    final http.Response response = await http.get(Uri.parse("$_usersUrl/search?name=$name&exact=$exact&page=$page&limit=$limit"));

    if (response.statusCode == 200) {
      final List<UserModel> users = await compute(_decodeUsers, response);

      return UsersServiceResponse(
        successful: true,
        users: users
      );
    }

    return UsersServiceResponse(
      successful: false,
      errorMessage: "Failed to get user with name.\nThe server responded with a status code of ${response.statusCode}"
    );
  }
}