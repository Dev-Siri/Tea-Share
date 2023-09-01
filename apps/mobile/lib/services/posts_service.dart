import "dart:async";
import "dart:convert";

import "package:flutter/foundation.dart";
import "package:http/http.dart" as http;
import "package:image_picker/image_picker.dart";
import "package:tea_share/constants.dart";
import "package:tea_share/models/comment_model.dart";
import "package:tea_share/models/post_model.dart";

class PostsServiceResponse<T> {
  final bool successful;

  T? data;
  String? errorMessage;

  PostsServiceResponse({
    required this.successful,
    this.data,
    this.errorMessage,
  });
}

class CommentsResponse {
  final int total;
  final List<CommentModel> comments;

  const CommentsResponse({
    required this.total,
    required this.comments
  });

  factory CommentsResponse.fromJson(Map<String, dynamic> json) => CommentsResponse(
    total: json["total"] as int,
    comments: (json["comments"] as List<dynamic>)
      .map((commentJson) => CommentModel.fromJson(commentJson))
      .toList()
  );
}

class PostService {
  static const _postsUrl = "$backendUrl/posts";
  static const Map<String, String> _headers = {
    "Content-Type": "application/json; charset=UTF-8",
  };

  List<PostModel> _decodePosts(http.Response response) {
    final List? body = jsonDecode(response.body);

    if (body == null) return [];

    final List<PostModel> posts = body.map((final post) => PostModel.fromJson(post)).toList();

    return posts;
  }

  CommentsResponse _decodeComments(http.Response response) {
    final body = jsonDecode(response.body);
    final CommentsResponse comments = CommentsResponse.fromJson(body);

    return comments;
  }

  Future<PostsServiceResponse<List<PostModel>>> fetchPosts({ required int limit, required int page }) async {
    final http.Response response = await http.get(Uri.parse("$_postsUrl?page=$page&limit=$limit"));

    if (response.statusCode == 200) {
      final List<PostModel> posts = await compute(_decodePosts, response);
      
      return PostsServiceResponse<List<PostModel>>(
        successful: true,
        data: posts
      );
    }
    
    return PostsServiceResponse<List<PostModel>>(
      successful: false,
      errorMessage: "${response.body}\nThe server responded with a status of ${response.statusCode}"
    );
  }

  Future<PostsServiceResponse<CommentsResponse>> fetchComments({ required int limit, required int page, required String postId }) async {
    final http.Response response = await http.get(Uri.parse("$_postsUrl/$postId/comments?page=$page&limit=$limit"));

    if (response.statusCode == 200) {
      final CommentsResponse comments = await compute(_decodeComments, response);

      return PostsServiceResponse(
        successful: true,
        data: comments
      );
    }

    return PostsServiceResponse<CommentsResponse>(
      successful: false,
      errorMessage: "${response.body}\nThe server responded with a status of ${response.statusCode}"
    );
  }

  Future<PostsServiceResponse<List<PostModel>>> fetchPostsByQuery({
    required String query,
    required int page,
    required int limit,
    String? type = "user",
  }) async {
    final http.Response response = await http.get(
      Uri.parse("$_postsUrl/search?q=$query&type=$type&page=$page&limit=$limit")
    );

    if (response.statusCode == 200) {
      final List<PostModel> posts = await compute(_decodePosts, response);

      return PostsServiceResponse<List<PostModel>>(
        successful: true,
        data: posts,
      );
    }

    return PostsServiceResponse<List<PostModel>>(
      successful: false,
      errorMessage: "${response.body}\nThe Server responded with a status code of ${response.statusCode}"
    );
  }

  Future<PostsServiceResponse> likePost({ required String postId, required String userId }) async {
    final http.Response response = await http.patch(
      Uri.parse("$_postsUrl/$postId/like?userId=$userId"),
      headers: _headers
    );

    if (response.statusCode != 204) {
      return PostsServiceResponse(
        successful: false,
        errorMessage: "${response.body}\nThe server responded with a status code of ${response.statusCode}"
      );
    }

    return PostsServiceResponse(successful: true);
  }

  Future<PostsServiceResponse> createPost({
    required String caption,
    required XFile? postImage,
    required String userId,
  }) async {
    String imageUrl = "";

    if (postImage != null) {
      final String encodedImage = await compute(base64Encode, await postImage.readAsBytes());
      imageUrl = "data:${postImage.mimeType};base64,$encodedImage";
    }

    final http.Response response = await http.post(
      Uri.parse(_postsUrl),
      headers: _headers,
      body: jsonEncode({
        "caption": caption,
        "postImage": imageUrl,
        "userId": userId,
      })
    );

    if (response.statusCode == 201) return PostsServiceResponse(successful: true);

    return PostsServiceResponse(
      successful: false,
      errorMessage: "${response.body}\nThe server responded with a status code of ${response.statusCode}"
    );
  }

  Future<PostsServiceResponse> addComment({
    required String postId,
    required String userId,
    required String comment,
  }) async {
    final http.Response response = await http.post(
      Uri.parse("$_postsUrl/$postId/comments?userId=$userId"),
      body: jsonEncode({
        "comment": comment
      })
    );

    if (response.statusCode == 201) {
      return PostsServiceResponse(successful: true);
    }

    return PostsServiceResponse(successful: false);
  }
}