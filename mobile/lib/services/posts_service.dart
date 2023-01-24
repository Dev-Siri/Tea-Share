import 'dart:convert';

import 'package:flutter/foundation.dart' show compute;
import 'package:http/http.dart' as http;

import 'package:tea_share/env/secret_keys.dart';
import 'package:tea_share/models/post_model.dart';
import 'package:tea_share/utils/firebase_storage.dart';

class PostService with Storage {
  List _decodePosts(String jsonString) {
    final List posts = jsonDecode(jsonString);
    return posts;
  }

  Future<List<Post>> fetchPosts({ int? limit, int? page }) async {
    final http.Response response = await http.get(Uri.parse('$BACKEND_URL/posts?page=$page&limit=$limit'));

    if (response.statusCode == 200) {
      final List body = await compute(_decodePosts, response.body);
      final List<Post> posts = body.map((var post) => Post.fromJson(post)).toList();
      
      return posts;
    }
    
    return throw Error();
  }

  Future<List<Post>> fetchPostsByQuery({ required String query, bool? user = false }) async {
    final http.Response response = await http.get(Uri.parse('$BACKEND_URL/posts/search?query=$query&user=$user'));

    if (response.statusCode == 200) {
      final List body = await compute(_decodePosts, response.body);
      final List<Post> posts = body.map((var post) => Post.fromJson(post)).toList();
      
      return posts;
    }
    
    return throw Error();
  }

  Future<void> likePost({ required String id, required String username, required String image }) async {
    await http.patch(Uri.parse("$BACKEND_URL/posts/$id/like?name=$username&image=$image"));
  }

  Future<void> createPost({ required Post post }) async {
    final String? uploadedImageResponse = await uploadImage(imagePath: post.image, type: "posts");

    await http.post(
      Uri.parse("$BACKEND_URL/posts"),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: jsonEncode({
        'title': post.title,
        'description': post.description,
        'image': uploadedImageResponse,
        'author': post.author,
        'authorImage': post.authorImage,
        'people': post.people,
        'peopleImage': post.peopleImage
      })
    );
  }
}