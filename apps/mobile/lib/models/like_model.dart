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