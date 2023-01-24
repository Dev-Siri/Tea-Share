class User {
  final String username;
  final String email;
  final String image;
  final String id;

  const User({
    required this.username,
    required this.email,
    required this.image,
    required this.id,
  });

  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      username: json['username'] as String,
      email: json['email'] as String,
      image: json['image'] as String,
      id: json['_id'] as String
    );
  }
}