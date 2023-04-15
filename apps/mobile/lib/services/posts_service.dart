import 'dart:convert';

import 'package:http/http.dart' as http;
import 'package:tea_share/env/secret_keys.dart';
import 'package:tea_share/models/post_model.dart';
import 'package:tea_share/utils/storage.dart';

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

class PostService with Storage {
  static const Map<String, String> _headers = {
    'Content-Type': 'application/json; charset=UTF-8',
  };

  Future<PostsServiceResponse> fetchPosts({ required int limit, required int page }) async {
    final http.Response response = await http.get(Uri.parse('$BACKEND_URL/posts?page=$page&limit=$limit'));

    if (response.statusCode == 200) {
      final List body = jsonDecode(response.body);
      final List<PostModel> posts = body.map((final post) => PostModel.fromJson(post)).toList();
      
      return PostsServiceResponse(
        successful: true,
        posts: posts
      );
    }
    
    return PostsServiceResponse(
      successful: false,
      errorMessage: 'Failed to get posts.\nThe Server responded with a status code of ${response.statusCode}'
    );
  }

  Future<PostsServiceResponse> fetchPostsByQuery({ required String query, bool? fromUser = true }) async {
    final http.Response response = await http.get(Uri.parse('$BACKEND_URL/posts/search?q=$query&fromUser=$fromUser'));

    if (response.statusCode == 200) {
      final List body = jsonDecode(response.body);
      final List<PostModel> posts = body.map((final post) => PostModel.fromJson(post)).toList();

      return PostsServiceResponse(
        successful: true,
        posts: posts,
      );
    }
    
    return PostsServiceResponse(
      successful: false,
      errorMessage: 'Failed to get posts.\nThe Server responded with a status code of ${response.statusCode}'
    );
  }

  Future<PostsServiceResponse> likePost({ required String id, required String username, required String image }) async {
    final http.Response response = await http.patch(
      Uri.parse('$BACKEND_URL/posts/$id/like'),
      headers: _headers,
      body: jsonEncode({
        'username': username,
        'image': image,
      })
    );
  
    if (response.statusCode != 200) {
      return PostsServiceResponse(
        successful: false,
        errorMessage: 'Failed to like post.\nThe server responded with a status code of ${response.statusCode}'
      );
    }

    return PostsServiceResponse(
      successful: true
    );
  }

  Future<PostsServiceResponse> createPost({ required PostModel post }) async {
    final StorageResponse uploadedImageResponse = await uploadImage(imagePath: post.image, type: "posts");
    
    if (!uploadedImageResponse.successful) {
      return PostsServiceResponse(
        successful: false,
        errorMessage: uploadedImageResponse.errorMessage
      );
    }
    
    final http.Response response = await http.post(
      Uri.parse('$BACKEND_URL/posts'),
      headers: _headers,
      body: jsonEncode({
        'title': post.title,
        'description': post.description,
        'image': uploadedImageResponse,
        'author': post.author,
        'authorImage': post.authorImage,
      })
    );

    if (response.statusCode == 201) {
      return PostsServiceResponse(
        successful: true
      );
    }


    return PostsServiceResponse(
      successful: false,
      errorMessage: 'Failed to create post.\nThe server responded with a status code of ${response.statusCode}'
    );
  }
}