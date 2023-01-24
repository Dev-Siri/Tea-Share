import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'package:tea_share/env/secret_keys.dart' show BACKEND_URL;
import 'package:tea_share/models/user_model.dart';

class UserService {
  static const Map<String, String> _headers = {
    'Content-Type': 'application/json; charset=UTF-8',
  };

  T _decodeUsers<T>(String jsonString) {
    final T users = jsonDecode(jsonString);
    return users;
  }
  
  Future<List<User>> fetchUsers({ int? limit, int? page }) async {
    final http.Response response = await http.get(Uri.parse('$BACKEND_URL/users?page=$page&limit=$limit'));

    if (response.statusCode == 200) {
      List body = await compute<String, List>(_decodeUsers, response.body);
      List<User> users = body.map((var user) => User.fromJson(user)).toList();

      return users;
    }

    throw Error();
  }

  Future<User> fetchUserByQuery({ required String query }) async {
    final http.Response response = await http.get(Uri.parse('$BACKEND_URL/users/search?query=$query'));

    if (response.statusCode == 200) {
      final Map<String, dynamic> body = await compute(_decodeUsers, response.body);
      final User user = User.fromJson(body);

      return user;
    }

    throw Error();
  }

  Future<void> createUser(User user) async => await http.post(
    Uri.parse("$BACKEND_URL/users"),
    headers: _headers,
    body: jsonEncode({
      'username': user.username,
      'email': user.email,
      'image': user.image,
    })
  );

  Future<void> updateProfile({ required User user }) async {
    await http.patch(
      Uri.parse("$BACKEND_URL/user/${user.id}"),
      headers: _headers,
      body: jsonEncode({
        'username': user.username,
        'image': user.image,
        'email': user.email,
      })
    );
  }
}