class PostModel {
  final String id;
  final String title;
  final String description;
  final String author;
  final String authorImage;
  final String image;
  final String createdAt;
  final List people;
  final List peopleImage;

  const PostModel({
    required this.id,
    required this.title,
    required this.description,
    required this.author,
    required this.authorImage,
    required this.image,
    required this.createdAt,
    required this.people,
    required this.peopleImage,
  });

  factory PostModel.fromJson(Map<String, dynamic> json) => PostModel(
    id: json['_id'] as String,
    title: json['title'] as String,
    description: json['description'] as String,
    image: json['image'] as String,
    author: json['author'] as String,
    authorImage: json['authorImage'] as String,
    createdAt: json['createdAt'] as String,
    people: json['people'] as List,
    peopleImage: json['peopleImage'] as List
  );
}