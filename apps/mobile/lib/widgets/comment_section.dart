import "package:cached_network_image/cached_network_image.dart";
import "package:flutter/material.dart";
import "package:flutter_vector_icons/flutter_vector_icons.dart";
import "package:provider/provider.dart";
import "package:tea_share/models/comment_model.dart";
import "package:tea_share/models/user_model.dart";
import "package:tea_share/services/posts_service.dart";
import "package:tea_share/services/users_service.dart";
import "package:tea_share/widgets/error_message.dart";
import "package:tea_share/widgets/skeletons/comments_skeleton.dart";

class CommentSection extends StatefulWidget {
  final String postId;
  final ScrollController commentsListController;

  const CommentSection({
    super.key,
    required this.postId,
    required this.commentsListController
  });

  @override
  State<CommentSection> createState() => _CommentsState();
}

int page = 1;

class _CommentsState extends State<CommentSection> {
  final TextEditingController _commentInputController = TextEditingController();

  String? _errorMessage;
  bool _isLoadingComments = true;
  bool _isCreatingComment = false;

  final List<CommentModel> _comments = [];

  @override
  void initState() {
    if (mounted) {
      widget.commentsListController.addListener(_commentsListListener);     
      page = 1;

      WidgetsBinding.instance.addPostFrameCallback((_) => _fetchComments());
    }

    super.initState();
  }

  void _commentsListListener() {
    if (widget.commentsListController.position.pixels == widget.commentsListController.position.maxScrollExtent) {
      page++;
      _fetchComments();
    }
  }
  
  @override
  void dispose() {
    widget.commentsListController.dispose();
    super.dispose();
  }

  Future<void> _fetchComments() async {
    final PostsServiceResponse<CommentsResponse> comments = await context.read<PostService>().fetchComments(
      limit: 10,
      page: page,
      postId: widget.postId
    );

    if (comments.successful && comments.data != null && mounted) {
      setState(() {
        _isLoadingComments = false;
        _comments.addAll(comments.data!.comments);
      });
      return;
    }

    setState(() => _errorMessage = comments.errorMessage);
  }

  Future<void> _addComment() async {
    final String comment = _commentInputController.text;

    if (comment == "") return;

    setState(() => _isCreatingComment = true);
    final UserModel? user = await context.read<UserService>().user;

    if (user == null) {
      setState(() => _isCreatingComment = false);
      return;
    }

    final PostsServiceResponse commentResponse = await context.read<PostService>().addComment(
      postId: widget.postId,
      userId: user.userId!,
      comment: comment
    );

    if (commentResponse.successful) {
      _comments.add(
        CommentModel(
          username: user.username,
          userImage: user.userImage,
          createdAt: DateTime.now().toUtc().toIso8601String(),
          comment: comment
        )
      );
    }

    setState(() => _isCreatingComment = false);
  }

  @override
  Widget build(BuildContext context) {
    if (_errorMessage != null) {
      return ErrorMessage(
        icon: Icons.error,
        message: _errorMessage!
      );
    }

    if (_isLoadingComments) {
      return const CommentsSkeleton();
    }

    return Column(
      children: <Widget>[
        TextFormField(
          controller: _commentInputController,
          decoration: const InputDecoration(
            border: InputBorder.none,
            labelText: "Add a comment"
          ),
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.end,
          children: <Widget>[
            ElevatedButton(
              style: ButtonStyle(
                backgroundColor: MaterialStatePropertyAll(Theme.of(context).primaryColor),
                foregroundColor: const MaterialStatePropertyAll(Colors.white),
                shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                  RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(50),
                  ),
                ),
              ),
              onPressed: _isCreatingComment ? null : _addComment,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  const Icon(MaterialCommunityIcons.tea),
                  const Padding(
                    padding: EdgeInsets.only(left: 5),
                    child: Text("Take my cup of tea!",
                      style: TextStyle(fontWeight: FontWeight.bold)
                    ),
                  ),
                  if (_isCreatingComment)
                    Container(
                      height: 20,
                      width: 30,
                      padding: const EdgeInsets.only(left: 10),
                      child: const CircularProgressIndicator(
                        color: Colors.white,
                        strokeWidth: 3,
                      ),
                    )
                ],
              )
            ),
          ],
        ),
        ..._comments.map((CommentModel comment) => ListTile(
          leading: CircleAvatar(
            backgroundImage: CachedNetworkImageProvider(comment.userImage),
          ),
          title: Text(comment.username),
          subtitle: Text(comment.comment),
        )).toList()
      ],
    );
  }
}