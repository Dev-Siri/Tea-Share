import "package:flutter/material.dart";
import "package:provider/provider.dart";
import "package:tea_share/models/post_model.dart";
import "package:tea_share/services/posts_service.dart";
import "package:tea_share/widgets/error_message.dart";
import "package:tea_share/widgets/post_card.dart";
import "package:tea_share/widgets/skeletons/posts_skeleton.dart";

class Home extends StatefulWidget {
  const Home({ super.key });

  @override
  State<Home> createState() => _HomeState();
}

int page = 1;

class _HomeState extends State<Home> with TickerProviderStateMixin {
  final GlobalKey<AnimatedListState> _postListState = GlobalKey<AnimatedListState>();

  final List<PostModel> _posts = [];
  bool _isLoadingPosts = true;

  String? _errorMessage;

  @override
  void initState() {
    WidgetsFlutterBinding.ensureInitialized();
    if (mounted) {
      page = 1;

      WidgetsBinding.instance.addPostFrameCallback((_) => _showPosts());
    }

    super.initState();
  }

  Future<void> _showPosts() async {
    final PostsServiceResponse response = await context.read<PostService>().fetchPosts(limit: 4, page: page);

    if (!response.successful && mounted) {
      setState(() {
        _errorMessage = response.errorMessage;
        _isLoadingPosts = false;
      });

      return;
    }
 
    if (mounted) {
      setState(() {
        _isLoadingPosts = false;

        for (PostModel post in response.posts!) {
          Future.delayed(const Duration(milliseconds: 50), () {
            _posts.add(
              PostModel(
                postId: post.postId,
                caption: post.caption,
                postImage: post.postImage,
                username: post.username,
                userImage: post.userImage,
                createdAt: post.createdAt,
                userId: post.userId,
                likes: post.likes,
              )
            );
            
            _postListState.currentState?.insertItem(_posts.length - 1);
          });
        }
      });
    }
  }

  Future<void> _refreshPosts() async {
    page = 1;
    setState(() => _isLoadingPosts = true);
    await _showPosts();
  }

  @override
  Widget build(BuildContext context) {
    if (_isLoadingPosts) {
      return const PostsSkeleton();
    }
    
    if (_errorMessage != null) {
      return ErrorMessage(
        icon: Icons.error,
        message: _errorMessage!
      );
    }
    
    return RefreshIndicator(
      onRefresh: _refreshPosts,
      child: AnimatedList(
        padding: const EdgeInsets.only(
          left: 10,
          right: 10,
          bottom: 25,
        ),
        initialItemCount: _posts.length,
        key: _postListState,
        itemBuilder: (BuildContext context, int index, Animation animation) {        
          if (index == _posts.length - 1) {
            page++;
            _showPosts();
    
            return const PostsSkeleton();
          }
    
          return ScaleTransition(
            scale: animation.drive(
              CurveTween(
                curve: Curves.easeIn
              )
            ),
            child: PostCard(
              postId: _posts[index].postId,
              caption: _posts[index].caption,
              postImage: _posts[index].postImage,
              userId: _posts[index].userId,
              username: _posts[index].username,
              userImage: _posts[index].userImage,
              createdAt: _posts[index].createdAt,
              likes: _posts[index].likes,
            ),
          );
        },
      ),
    );
  }
}