import "like_model.dart";

class PostModel {
  final String postId;
  final String caption;
  final String? postImage;
  final String userId;
  final String username;
  final String userImage;
  final List<LikeModel> likes;
  final String createdAt;

  const PostModel({
    required this.postId,
    required this.caption,
    required this.userId,
    required this.username,
    required this.userImage,
    required this.postImage,
    required this.likes,
    required this.createdAt,
  });

  factory PostModel.fromJson(Map<String, dynamic> json) => PostModel(
    postId: json["postId"] as String,
    caption: json["caption"] as String,
    postImage: json["postImage"] as String?,
    userId: json["userId"] as String,
    username: json["username"] as String,
    userImage: json["userImage"] as String,
    likes: (json["likes"] as List<dynamic>)
      .map((likeJson) => LikeModel.fromJson(likeJson))
      .toList(),
    createdAt: json["createdAt"] as String,
  );
}