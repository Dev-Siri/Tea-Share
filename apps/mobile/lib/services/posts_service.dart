import "dart:async";
import "dart:convert";

import "package:flutter/foundation.dart";
import "package:http/http.dart" as http;
import "package:tea_share/constants.dart";
import "package:tea_share/models/post_model.dart";

class PostsServiceResponse {
  final bool successful;
  
  List<PostModel>? posts;
  String? errorMessage;

  PostsServiceResponse({
    required this.successful,
    this.posts,
    this.errorMessage,
  });
}

class PostService {
  static const Map<String, String> _headers = {
    "Content-Type": "application/json; charset=UTF-8",
  };

  List<PostModel> _decodePosts(http.Response response) {
    final List? body = jsonDecode(response.body);

    if (body == null) return [];

    final List<PostModel> posts = body.map((final post) => PostModel.fromJson(post)).toList();

    return posts;
  }

  Future<PostsServiceResponse> fetchPosts({ required int limit, required int page }) async {
    final http.Response response = await http.get(Uri.parse("$backendUrl/posts?page=$page&limit=$limit"));

    if (response.statusCode == 200) {
      final List<PostModel> posts = await compute(_decodePosts, response);
      
      return PostsServiceResponse(
        successful: true,
        posts: posts
      );
    }
    
    return PostsServiceResponse(
      successful: false,
      errorMessage: "${response.body}\nThe server responded with a status of ${response.statusCode}"
    );
  }

  Future<PostsServiceResponse> fetchPostsByQuery({
    required String query,
    required int page,
    required int limit,
    String? type = "user",
  }) async {
    final http.Response response = await http.get(
      Uri.parse("$backendUrl/posts/search?q=$query&type=$type&page=$page&limit=$limit")
    );

    if (response.statusCode == 200) {
      final List<PostModel> posts = await compute(_decodePosts, response);

      return PostsServiceResponse(
        successful: true,
        posts: posts,
      );
    }

    return PostsServiceResponse(
      successful: false,
      errorMessage: "${response.body}\nThe Server responded with a status code of ${response.statusCode}"
    );
  }

  Future<PostsServiceResponse> likePost({ required String id, required String username, required String image }) async {
    final http.Response response = await http.patch(
      Uri.parse("$backendUrl/posts/$id/like"),
      headers: _headers,
      body: jsonEncode({
        "username": username,
        "image": image,
      })
    );

    if (response.statusCode != 200) {
      return PostsServiceResponse(
        successful: false,
        errorMessage: "${response.body}\nThe server responded with a status code of ${response.statusCode}"
      );
    }

    return PostsServiceResponse(
      successful: true
    );
  }

  Future<PostsServiceResponse> createPost({
    required String title,
    required String description,
    required Uint8List postImage,
    required String userId,
  }) async {
    final String encodedImage = await compute(base64Encode, postImage);

    final http.Response response = await http.post(
      Uri.parse("$backendUrl/posts"),
      headers: _headers,
      body: jsonEncode({
        "title": title,
        "description": description,
        "image": encodedImage,
        "userId": userId,
      })
    );

    if (response.statusCode == 201) {
      return PostsServiceResponse(
        successful: true
      );
    }


    return PostsServiceResponse(
      successful: false,
      errorMessage: "${response.body}\nThe server responded with a status code of ${response.statusCode}"
    );
  }
}