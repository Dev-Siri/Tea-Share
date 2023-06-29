import "package:cached_network_image/cached_network_image.dart";
import "package:flutter/material.dart";
import "package:skeletons/skeletons.dart";
import "package:tea_share/models/post_model.dart";

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
          "/post-info",
          arguments: post
        ),
        padding: EdgeInsets.zero,
        icon: CachedNetworkImage(
          imageUrl: post.postImage,
          height: 205.5,
          progressIndicatorBuilder: (BuildContext context, String url, DownloadProgress progress) => SkeletonLine(
            style: SkeletonLineStyle(
              height: 300,
              borderRadius: BorderRadius.circular(10)
            ),
          ),
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