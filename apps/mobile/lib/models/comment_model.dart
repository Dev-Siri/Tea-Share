class CommentModel {
  final String username;
  final String userImage;
  final String createdAt;
  final String comment;

  const CommentModel({
    required this.username,
    required this.userImage,
    required this.createdAt,
    required this.comment
  });

  factory CommentModel.fromJson(Map<String, dynamic> json) => CommentModel(
    username: json["username"] as String,
    userImage: json["userImage"] as String,
    createdAt: json["createdAt"] as String,
    comment: json["comment"] as String
  );
}