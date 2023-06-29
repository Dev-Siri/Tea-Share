class LikeModel {
  final String username;
  final String userImage;

  const LikeModel({
    required this.username,
    required this.userImage,
  });

  factory LikeModel.fromJson(Map<String, dynamic> json) => LikeModel(
    username: json["username"] as String,
    userImage: json["userImage"] as String,
  );
}

class PostModel {
  final String postId;
  final String title;
  final String description;
  final String postImage;
  final String userId;
  final String username;
  final String userImage;
  final List<LikeModel> likes;
  final String createdAt;

  const PostModel({
    required this.postId,
    required this.title,
    required this.description,
    required this.userId,
    required this.username,
    required this.userImage,
    required this.postImage,
    required this.likes,
    required this.createdAt,
  });

  factory PostModel.fromJson(Map<String, dynamic> json) => PostModel(
    postId: json["postId"] as String,
    title: json["title"] as String,
    description: json["description"] as String,
    postImage: json["postImage"] as String,
    userId: json["userId"] as String,
    username: json["username"] as String,
    userImage: json["userImage"] as String,
    likes: (json["likes"] as List<dynamic>)
      .map((likeJson) => LikeModel.fromJson(likeJson))
      .toList(),
    createdAt: json["createdAt"] as String,
  );
}