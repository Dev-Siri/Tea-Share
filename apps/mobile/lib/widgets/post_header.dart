import "package:cached_network_image/cached_network_image.dart";
import "package:date_time_format/date_time_format.dart";
import "package:flutter/material.dart";

class PostHeader extends StatelessWidget {
  final String username;
  final String userImage;
  final String createdAt;

  const PostHeader({
    super.key,
    required this.username,
    required this.userImage,
    required this.createdAt,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(top: 10),
      child: Row(
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.only(
              left: 2,
              right: 10
            ),
            child: CircleAvatar(
              backgroundImage: CachedNetworkImageProvider(userImage),
              radius: 20,
            ),
          ),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(username,
                style: const TextStyle(fontSize: 15),
              ),
              Text(DateTimeFormat.relative(DateTime.parse(createdAt), appendIfAfter: "ago"),
                style: const TextStyle(
                  fontSize: 13,
                  color: Colors.grey
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}