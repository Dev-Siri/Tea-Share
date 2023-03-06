class UserModel {
  final String username;
  final String email;
  final String image;
  final String? id;

  const UserModel({
    required this.username,
    required this.email,
    required this.image,
    this.id,
  });

  factory UserModel.fromJson(Map<String, dynamic> json) => UserModel(
    username: json['username'] as String,
    email: json['email'] as String,
    image: json['image'] as String,
    id: json['_id'] as String
  );
}