import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';

import 'package:tea_share/models/post_model.dart';

class PostGrid extends StatelessWidget {
  final List<PostModel> posts;
  
  const PostGrid({
    super.key,
    required this.posts
  });

  Hero _postTile(BuildContext context, PostModel post) {
    return Hero(
      tag: post.title,
      child: IconButton(
        onPressed: () => Navigator.pushNamed(
          context,
          '/post-info',
          arguments: PostModel(
            image: post.image,
            title: post.title,
            description: post.description,
            author: post.author,
            authorImage: post.authorImage,
            people: post.people,
            peopleImage: post.peopleImage,
            createdAt: post.createdAt,
            id: post.id
          )
        ),
        padding: EdgeInsets.zero,
        icon: CachedNetworkImage(
          imageUrl: post.image,
          height: 205.5,
          progressIndicatorBuilder: (BuildContext context, String url, DownloadProgress progress) => const CircularProgressIndicator(),
          // Fills half of the screen so 2 items can be displayed in one row
          width: MediaQuery.of(context).size.width / 2,
          fit: BoxFit.fitHeight,
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    if (posts.length != 1) {
      return Wrap(
        children: posts.map((PostModel post) => _postTile(context, post)).toList(),
      );
    }

    return Align(
      alignment: Alignment.topLeft,
      child: _postTile(context, posts[0])
    );
  }
}