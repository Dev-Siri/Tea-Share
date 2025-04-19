class UserModel {
  final String? userId;
  final String username;
  final String userImage;
  final String email;

  const UserModel({
    required this.username,
    required this.userImage,
    required this.email,
    this.userId,
  });

  factory UserModel.fromJson(Map<String, dynamic> json) => UserModel(
    userId: json["userId"] as String,
    username: json["username"] as String,
    userImage: json["userImage"] as String,
    email: json["email"] as String,
  );
}