import "package:cached_network_image/cached_network_image.dart";
import "package:flutter/material.dart";
import "package:provider/provider.dart";
import "package:tea_share/models/post_model.dart";
import "package:tea_share/models/user_model.dart";
import "package:tea_share/services/posts_service.dart";
import "package:tea_share/services/users_service.dart";
import "package:tea_share/widgets/error_message.dart";
import "package:tea_share/widgets/post_grid.dart";
import "package:tea_share/widgets/skeletons/posts_grid_skeleton.dart";

class Profile extends StatefulWidget {
  const Profile({ super.key });

  @override
  State<Profile> createState() => _ProfileState();
}

class _ProfileState extends State<Profile> {
  String _profileImage = "";
  String _username = "";

  List<PostModel> _posts = [];
  bool _isLoading = true;

  String? _errorMessage;

  @override
  void initState() {
    if (mounted) {
      WidgetsFlutterBinding.ensureInitialized();
      _fetchData();
    }
    
    super.initState();
  }

  Future<void> _fetchData() async {
    final UserModel? user = await context.read<UserService>().user;
  
    setState(() => _isLoading = true);

    if (user != null) {
      setState(() {
        _profileImage = user.userImage;
        _username = user.username;
      });
    }

    final PostsServiceResponse postsResponse = await context.read<PostService>().fetchPostsByQuery(
      query: _username,
      page: 1,
      limit: 8,
    );
  
    setState(() {
      if (postsResponse.successful) {
        _posts = postsResponse.posts!;
      } else {
        _errorMessage = postsResponse.errorMessage;
      }
      
      _isLoading = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    if (_errorMessage != null) {
      return ErrorMessage(
        icon: Icons.error,
        message: _errorMessage!
      );
    }

    return ListView(
      addAutomaticKeepAlives: false,
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
                    Text(_username,
                      style: const TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 28
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.only(top: 0, bottom: 7),
                      child: Text(
                        "@${_username.toLowerCase().replaceAll(RegExp(r" "), "-")}",
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
        Visibility(
          visible: _isLoading,
          replacement: Visibility(
            visible: _posts.isNotEmpty,
            replacement: const Padding(
              padding: EdgeInsets.only(top: 120),
              child: Column(
                children: <Widget>[
                  Icon(Icons.add_a_photo,
                    size: 80,
                  ),
                  Padding(
                    padding: EdgeInsets.only(top: 8),
                    child: Text("You have not posted anything yet."),
                  ),
                ],
              ),
            ),
            child: PostGrid(posts: _posts)
          ),
          child: const PostsGridSkeleton()
        )
      ],
    );
  }
}