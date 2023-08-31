import "package:cached_network_image/cached_network_image.dart";
import "package:flutter/material.dart";
import "package:provider/provider.dart";
import "package:tea_share/models/post_model.dart";
import "package:tea_share/models/user_model.dart";
import "package:tea_share/services/posts_service.dart";
import "package:tea_share/services/theme_service.dart";
import "package:tea_share/services/users_service.dart";
import "package:tea_share/utils/formatting.dart";
import "package:tea_share/widgets/error_message.dart";
import "package:tea_share/widgets/post_card.dart";
import "package:tea_share/widgets/skeletons/posts_skeleton.dart";
import "package:tea_share/widgets/top_bar.dart";

class Profile extends StatefulWidget {
  const Profile({ super.key });

  @override
  State<Profile> createState() => _ProfileState();
}

int page = 1;

class _ProfileState extends State<Profile> with Formatting {
  final ScrollController _postsGridController = ScrollController();
  final List<PostModel> _posts = [];

  String _profileImage = "";
  String _username = "";
  bool _isLoading = true;

  String? _errorMessage;

  @override
  void initState() {
    if (mounted) {
      WidgetsFlutterBinding.ensureInitialized();
      page = 1;

      _fetchData();

      _postsGridController.addListener(() {
        bool isTop = _postsGridController.position.pixels == 0;
        if (_postsGridController.position.atEdge && !isTop) {
          page++;
          _fetchData();
        }
      });
    }

    super.initState();
  }

  @override
  void dispose() {
    _postsGridController.dispose();

    super.dispose();
  }

  Future<void> _setupUser() async {
    final UserModel? user = await context.read<UserService>().user;

    if (user != null) {
      setState(() {
        _profileImage = user.userImage;
        _username = user.username;
      });
    }
  }

  Future<void> _fetchData() async {
    if (_username == "") await _setupUser();

    final PostsServiceResponse postsResponse = await context.read<PostService>().fetchPostsByQuery(
      query: _username,
      page: page,
      limit: 8,
    );
  
    setState(() {
      if (mounted && postsResponse.successful && postsResponse.posts != null) {
        _posts.addAll(postsResponse.posts!);
      } else {
        _errorMessage = postsResponse.errorMessage;
      }

      _isLoading = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    if (_errorMessage != null) {
      return Scaffold(
        backgroundColor: context.watch<DarkThemeService>().darkTheme ? Colors.black : Colors.white,
        appBar: const TopBar(showBackButton: true),
        body: ErrorMessage(
          icon: Icons.error,
          message: _errorMessage!
        ),
      );
    }

    return Scaffold(
      backgroundColor: context.watch<DarkThemeService>().darkTheme ? Colors.black : Colors.white,
      appBar: const TopBar(showBackButton: true),
      body: ListView(
        controller: _postsGridController,
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.all(20),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.start,
              children: <Widget>[
                CircleAvatar(
                  radius: 50,
                  backgroundImage: CachedNetworkImageProvider(_profileImage),
                ),
                Padding(
                  padding: const EdgeInsets.only(left: 20),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                      Text(
                        _username,
                        style: const TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 28,
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.only(top: 0, bottom: 7),
                        child: Text(
                          formatHandle(_username),
                          style: const TextStyle(
                            fontSize: 18,
                            color: Colors.grey,
                          ),
                        ),
                      ),
                    ],
                  ),
                )
              ],
            ),
          ),
          if (_isLoading)
            const PostsSkeleton()
          else if (_posts.isEmpty)
            const Padding(
              padding: EdgeInsets.only(top: 120),
              child: Column(
                children: <Widget>[
                  Icon(
                    Icons.add_a_photo,
                    size: 80,
                  ),
                  Padding(
                    padding: EdgeInsets.only(top: 8),
                    child: Text("You have not posted anything yet."),
                  ),
                ],
              ),
            )
          else
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 10),
              child: Column(
                children: _posts.map((PostModel post) => PostCard(
                  postId: post.postId,
                  caption: post.caption,
                  userId: post.userId,
                  username: post.username,
                  userImage: post.userImage,
                  postImage: post.postImage,
                  createdAt: post.createdAt,
                  likes: post.likes
                )).toList(),
              ),
            )
        ],
      ),
    );
  }
}