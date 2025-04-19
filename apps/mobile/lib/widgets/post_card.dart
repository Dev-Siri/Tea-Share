import "package:cached_network_image/cached_network_image.dart";
import "package:flutter/material.dart";
import "package:skeletons/skeletons.dart";
import "package:tea_share/models/like_model.dart";
import "package:tea_share/models/post_model.dart";
import "package:tea_share/widgets/like_button.dart";
import "package:tea_share/widgets/post_header.dart";

class PostCard extends StatelessWidget {
  final String postId;
  final String caption;
  final String? postImage;
  final String userId;
  final String username;
  final String userImage;
  final String createdAt;
  final List<LikeModel> likes;

  const PostCard({
    super.key,
    required this.postId,
    required this.caption,
    required this.userId,
    required this.username,
    required this.userImage,
    required this.postImage,
    required this.createdAt,
    required this.likes,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        PostHeader(
          username: username,
          userImage: userImage,
          createdAt: createdAt
        ),
        GestureDetector(
          onTap: () => Navigator.pushNamed(
            context,
            "/post-info",
            arguments: PostModel(
              postId: postId,
              caption: caption,
              postImage: postImage,
              userId: userId,
              username: username,
              userImage: userImage,
              likes: likes,
              createdAt: createdAt,
            )
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              Padding(
                padding: const EdgeInsets.only(
                  top: 15,
                  bottom: 5,
                  left: 3,
                ),
                child: Text(caption,
                  style: const TextStyle(fontSize: 17),
                  textAlign: TextAlign.left,
                ),
              ),
              if (postImage != null)
                Padding(
                  padding: const EdgeInsets.only(top: 3),
                  child: SizedBox(
                    height: 350,
                    width: double.infinity,
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(10),
                      child: Hero(
                        tag: postId,
                        child: CachedNetworkImage(
                          imageUrl: postImage!,
                          fit: BoxFit.cover,
                          progressIndicatorBuilder: (BuildContext context, String url, DownloadProgress progress) => SkeletonLine(
                            style: SkeletonLineStyle(
                              height: 350,
                              borderRadius: BorderRadius.circular(10)
                            ),
                          ),
                        ),
                      ),
                    )
                  ),
                ),
              LikeButton(
                likes: likes,
                postId: postId
              ),
            ],
          ),
        ),
      ],
    );
  }
}