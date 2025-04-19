import "package:cached_network_image/cached_network_image.dart";
import "package:flutter/material.dart";
import "package:full_screen_image/full_screen_image.dart";
import "package:provider/provider.dart";
import "package:tea_share/models/post_model.dart";
import "package:tea_share/services/theme_service.dart";
import "package:tea_share/widgets/comment_section.dart";
import "package:tea_share/widgets/like_button.dart";
import "package:tea_share/widgets/post_header.dart";
import "package:tea_share/widgets/top_bar.dart";

class PostInfo extends StatelessWidget {
  final ScrollController _commentsListController = ScrollController();

  PostInfo({ super.key });

  @override
  Widget build(BuildContext context) {
    final PostModel post = ModalRoute.of(context)!.settings.arguments as PostModel;

    return Scaffold(
      backgroundColor: context.watch<DarkThemeService>().darkTheme ? Colors.black : Colors.white,
      appBar: const TopBar(showBackButton: true),
      body: SafeArea(
        child: SingleChildScrollView(
          child: ListView(
            controller: _commentsListController,
            padding: const EdgeInsets.symmetric(horizontal: 10),
            shrinkWrap: true,
            children: <Widget>[
              PostHeader(
                username: post.username,
                userImage: post.userImage,
                createdAt: post.createdAt
              ),
              Padding(
                padding: const EdgeInsets.only(
                  top: 15,
                  bottom: 5,
                  left: 3,
                ),
                child: Text(post.caption,
                  style: const TextStyle(fontSize: 17),
                  textAlign: TextAlign.left,
                ),
              ),
              if (post.postImage != null)
                SizedBox(
                  height: 350,
                  child: FullScreenWidget(
                    disposeLevel: DisposeLevel.High,
                    backgroundIsTransparent: true,
                    child: Center(
                      child: Hero(
                        tag: post.postId,
                        child: ClipRRect(
                          borderRadius: BorderRadius.circular(10),
                          child: CachedNetworkImage(
                            width: double.infinity,
                            progressIndicatorBuilder: (BuildContext context, String url, DownloadProgress progress) => const CircularProgressIndicator(),
                            imageUrl: post.postImage!,
                            fit: BoxFit.cover,
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              LikeButton(
                likes: post.likes,
                postId: post.postId
              ),
              CommentSection(
                postId: post.postId,
                commentsListController: _commentsListController
              )
            ],
          ),
        ),
      ),
    );
  }
}