import "package:cached_network_image/cached_network_image.dart";
import "package:date_time_format/date_time_format.dart";
import "package:flutter/material.dart";
import "package:provider/provider.dart";
import "package:skeletons/skeletons.dart";
import "package:tea_share/models/like_model.dart";
import "package:tea_share/models/post_model.dart";
import "package:tea_share/models/user_model.dart";
import "package:tea_share/services/posts_service.dart";
import "package:tea_share/services/theme_service.dart";
import "package:tea_share/services/users_service.dart";
import "package:tea_share/utils/error_dialog.dart";

class PostCard extends StatefulWidget {
  final String postId;
  final String title;
  final String description;
  final String userId;
  final String username;
  final String userImage;
  final String postImage;
  final String createdAt;
  final List<LikeModel> likes;

  const PostCard({
    super.key,
    required this.postId,
    required this.title,
    required this.description,
    required this.userId,
    required this.username,
    required this.userImage,
    required this.postImage,
    required this.createdAt,
    required this.likes,
  });

  @override
  State<PostCard> createState() => _PostCardState();
}

class _PostCardState extends State<PostCard> with ErrorDialog {
  String _likeText = "";
  IconData _thumbsUpIcon = Icons.thumb_up_sharp;
  bool _isLikeButtonDisabled = false;

  String _postLikes(UserModel? user) {
    if (widget.likes.isEmpty) return "0 Likes";

    if (_isLikeButtonDisabled) {
      if (widget.likes.length == 1) return "You liked this post";

      return "You and ${widget.likes.length - 1} ${widget.likes.length - 1 == 1 ? "other" : "others"}";
    }

    if (widget.likes.length - 1 == 0) return "${widget.likes[0].username} liked this post";

    return "${widget.likes[0].username} and ${widget.likes.length - 1} others";
  }

  @override
  void initState() {
    WidgetsBinding.instance.addPostFrameCallback((_) => _prepareLikes());
    super.initState();
  }

  Future<void> _prepareLikes() async {
    final UserModel? user = await context.read<UserService>().user;

    setState(() {
      _isLikeButtonDisabled = widget.likes.any((LikeModel like) => like.username == user?.username);
      _likeText = _postLikes(user);

      if (_isLikeButtonDisabled) {
        _thumbsUpIcon = Icons.thumb_up_sharp;
      } else {
        _thumbsUpIcon = Icons.thumb_up_outlined;
      }
    });
  }

  Future<void> _likePost() async {
    final UserModel? user = await context.read<UserService>().user;
    
    if (user == null) return;

    final PostsServiceResponse response = await context.read<PostService>().likePost(
      id: widget.postId,
      username: user.username,
      image: user.userImage,
    );

    if (!response.successful) return showErrorDialog(context, response.errorMessage!);

    widget.likes.add(
      LikeModel(
        username: user.username,
        userImage: user.userImage
      ),
    );

    setState(() {
      _isLikeButtonDisabled = true;
      _thumbsUpIcon = Icons.thumb_up_sharp;
      _likeText = _postLikes(user);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 5,
      margin: const EdgeInsets.only(top: 15),
      child: Container(
        width: 600,
        decoration: const BoxDecoration(
          borderRadius: BorderRadius.all(Radius.circular(2)),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.only(
                top: 15,
                left: 15,
              ),
              child: Text(widget.title,
                style: const TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 25,
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(
                top: 10,
                bottom: 10,
                left: 19
              ),
              child: Text(DateTimeFormat.relative(DateTime.parse(widget.createdAt), appendIfAfter: "ago"),
                style: TextStyle(
                  color: context.read<DarkThemeService>().darkTheme ? Colors.grey.shade400 : Colors.grey.shade600
                ),
              )
            ),
            MaterialButton(
              padding: EdgeInsets.zero,
              onPressed: () => Navigator.pushNamed(
                context,
                "/post-info",
                arguments: PostModel(
                  postId: widget.postId,
                  title: widget.title,
                  postImage: widget.postImage,
                  description: widget.description,
                  userId: widget.userId,
                  username: widget.username,
                  userImage: widget.userImage,
                  likes: widget.likes,
                  createdAt: widget.createdAt,
                )
              ),
              child: SizedBox(
                width: 500,
                child: ClipRRect(
                  borderRadius: const BorderRadius.all(Radius.circular(10)),
                  child: Hero(
                    tag: widget.title,
                    child: CachedNetworkImage(
                      imageUrl: widget.postImage,
                      fit: BoxFit.fill,
                      progressIndicatorBuilder: (BuildContext context, String url, DownloadProgress progress) => SkeletonLine(
                        style: SkeletonLineStyle(
                          height: 300,
                          borderRadius: BorderRadius.circular(10)
                        ),
                      ),
                    ),
                  ),
                )
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(
                top: 10,
                left: 17,
              ),
              child: Text(widget.description,
                maxLines: 2,
                overflow: TextOverflow.ellipsis,
                style: TextStyle(
                  color: context.read<DarkThemeService>().darkTheme ? Colors.grey.shade400 : Colors.grey.shade600
                ),
              )
            ),
            Container(
              margin: const EdgeInsets.only(top: 10),
              child: Row(
                children: <Widget>[
                  MaterialButton(
                    onPressed: _isLikeButtonDisabled ? null : _likePost,
                    disabledTextColor: context.read<DarkThemeService>().darkTheme ? Colors.white : Colors.black,
                    child: SizedBox(
                      height: 48,
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.center,
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: <Widget>[
                          Icon(_thumbsUpIcon,
                            color: Colors.deepPurple,
                            size: 22
                          ),
                          Padding(
                            padding: const EdgeInsets.only(left: 5),
                            child: SizedBox(
                              width: 135,
                              child: Text(
                                _likeText,
                                overflow: TextOverflow.ellipsis
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                  const Spacer(),
                  Padding(
                    padding: const EdgeInsets.only(right: 5),
                    child: SizedBox(
                      width: 50,
                      child: Text(
                        widget.username,
                        overflow: TextOverflow.ellipsis
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.only(right: 10),
                    child: CircleAvatar(
                      backgroundImage: CachedNetworkImageProvider(widget.userImage),
                      radius: 15,
                    ),
                  )
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}