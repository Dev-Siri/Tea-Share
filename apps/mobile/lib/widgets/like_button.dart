import "package:flutter/material.dart";
import "package:flutter_vector_icons/flutter_vector_icons.dart";
import "package:provider/provider.dart";
import "package:tea_share/models/like_model.dart";
import "package:tea_share/models/user_model.dart";
import "package:tea_share/services/posts_service.dart";
import "package:tea_share/services/theme_service.dart";
import "package:tea_share/services/users_service.dart";

class LikeButton extends StatefulWidget {
  final List<LikeModel> likes;
  final String postId;

  const LikeButton({
    super.key,
    required this.likes,
    required this.postId,
  });

  @override
  State<LikeButton> createState() => _LikeButtonState();
}

class _LikeButtonState extends State<LikeButton> {
  bool _isLikeButtonDisabled = false;
  late int _likeCount;

  @override
  void initState() {
    setState(() => _likeCount = widget.likes.length);
    WidgetsBinding.instance.addPostFrameCallback((_) => _prepareLikes());
    super.initState();
  }

  Future<void> _prepareLikes() async {
    if (!mounted) return;

    final UserModel? user = await context.read<UserService>().user;

    setState(() => _isLikeButtonDisabled = widget.likes.any((LikeModel like) => like.username == user?.username));
  }

  Future<void> _likePost() async {
    final UserModel? user = await context.read<UserService>().user;

    if (user == null) return;

    final PostsServiceResponse response = await context.read<PostService>().likePost(
      postId: widget.postId,
      userId: user.userId!,
    );

    if (!response.successful) return;

    setState(() {
      _likeCount++;
      _isLikeButtonDisabled = true;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(
        horizontal: 3,
        vertical: 12
      ),
      child: Row(
        children: <Widget>[
          GestureDetector(
            onTap: _isLikeButtonDisabled ? null : _likePost,
            child: Icon(
              _isLikeButtonDisabled
                  ? MaterialCommunityIcons.heart
                  : MaterialCommunityIcons.heart_outline,
              color: Colors.deepPurple,
              size: 22,
            ),
          ),
          const SizedBox(width: 5),
          GestureDetector(
            onTap: () => Navigator.pushNamed(context, "/post-info/likes", arguments: widget.likes),
            child: SizedBox(
              width: 135,
              child: RichText(
                text: TextSpan(
                  children: <TextSpan>[
                    TextSpan(
                      text: "$_likeCount ",
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        color: context.watch<DarkThemeService>().darkTheme ? Colors.white : Colors.black
                      )
                    ),
                    TextSpan(
                      text: "Likes",
                      style: TextStyle(
                        color: context.watch<DarkThemeService>().darkTheme ? Colors.white : Colors.black
                      )
                    )
                  ]
                ),
                overflow: TextOverflow.ellipsis,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
