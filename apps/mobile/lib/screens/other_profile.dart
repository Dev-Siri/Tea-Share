import "package:cached_network_image/cached_network_image.dart";
import "package:flutter/material.dart";
import "package:provider/provider.dart";
import "package:tea_share/models/post_model.dart";
import "package:tea_share/models/user_model.dart";
import "package:tea_share/services/posts_service.dart";
import "package:tea_share/services/theme_service.dart";
import "package:tea_share/utils/formatting.dart";
import "package:tea_share/widgets/error_message.dart";
import "package:tea_share/widgets/post_grid.dart";
import "package:tea_share/widgets/skeletons/posts_grid_skeleton.dart";
import "package:tea_share/widgets/top_bar.dart";

class OtherProfile extends StatefulWidget {
  const OtherProfile({ super.key });

  @override
  State<OtherProfile> createState() => _OtherProfileState();
}

int page = 1;

class _OtherProfileState extends State<OtherProfile> with Formatting {
  final ScrollController _postsGridController = ScrollController();

  List<PostModel> _posts = [];
  bool _isLoading = true;

  String? _errorMessage;

  @override
  void didChangeDependencies() {
    if (mounted) {
      WidgetsFlutterBinding.ensureInitialized();
      page = 1;

      _fetchData();
    }

    _postsGridController.addListener(() {

    bool isTop = _postsGridController.position.pixels == 0;
    if (_postsGridController.position.atEdge && !isTop) {
      page++;
      _fetchData();
    }
  });

    super.didChangeDependencies();
  }

  Future<void> _fetchData() async {
    final UserModel user = ModalRoute.of(context)!.settings.arguments as UserModel;

    final PostsServiceResponse postsResponse = await context.read<PostService>().fetchPostsByQuery(
      query: user.username,
      page: page,
      limit: 8,
    );

    setState(() {
      if (mounted && postsResponse.successful && postsResponse.posts != null) {
        _posts = [..._posts, ...postsResponse.posts!];
      } else {
        _errorMessage = postsResponse.errorMessage;
      }
      
      _isLoading = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    final UserModel user = ModalRoute.of(context)!.settings.arguments as UserModel;

    return Scaffold(
      backgroundColor: context.watch<DarkThemeService>().darkTheme ? Colors.black : Colors.white,
      appBar: const TopBar(showBackButton: true),
      body: _errorMessage == null ? ListView(
        addAutomaticKeepAlives: false,
        controller: _postsGridController,
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.all(20),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.start,
              children: <Widget>[
                Hero(
                  tag: user.userImage,
                  child: CircleAvatar(
                    radius: 50,
                    backgroundImage: CachedNetworkImageProvider(user.userImage),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(20),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                      SizedBox(
                        width: MediaQuery.of(context).size.width - 180,
                        child: Text(user.username,
                          overflow: TextOverflow.ellipsis,
                          style: const TextStyle(
                            fontWeight: FontWeight.bold,
                            fontSize: 28,
                          ),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.only(top: 5, bottom: 7),
                        child: Text(
                          formatHandle(user.username),
                          style: const TextStyle(
                            fontSize: 18,
                            color: Colors.grey
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
            const PostsGridSkeleton()
          else if (_posts.isNotEmpty)
            PostGrid(posts: _posts)
          else
            Padding(
              padding: const EdgeInsets.only(top: 120),
              child: Column(
                children: <Widget>[
                  const Icon(
                    Icons.add_a_photo,
                    size: 80,
                  ),
                  Padding(
                    padding: const EdgeInsets.only(top: 8),
                    child: Text("${user.username} has not posted anything yet."),
                  ),
                ],
              ),
            )
          ],
        ) : ErrorMessage(
          icon: Icons.error,
          message: _errorMessage ?? "An Error occured when trying to load ${user.username}\"s profile.",
        ),
    );
  }
}