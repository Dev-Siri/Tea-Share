import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:tea_share/models/post_model.dart';
import 'package:tea_share/services/posts_service.dart';
import 'package:tea_share/widgets/error_message.dart';
import 'package:tea_share/widgets/post_card.dart';

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

      WidgetsBinding.instance.addPostFrameCallback((_) => showPosts(page));
    }

    super.initState();
  }

  Future<void> showPosts(int page) async {
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
                id: post.id,
                title: post.title,
                description: post.description,
                image: post.image,
                author: post.author,
                authorImage: post.authorImage,
                createdAt: post.createdAt,
                people: post.people,
                peopleImage: post.peopleImage
              )
            );
            
            _postListState.currentState?.insertItem(_posts.length - 1);
          });
        }
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    if (_isLoadingPosts) {
      return const Center(
        child: CircularProgressIndicator(),
      );
    } else if (_errorMessage != null) {
      return ErrorMessage(
        icon: Icons.error,
        message: _errorMessage!
      );
    } else {
      return AnimatedList(
        padding: const EdgeInsets.only(
          left: 25,
          right: 25,
          bottom: 25,
        ),
        initialItemCount: _posts.length,
        key: _postListState,
        itemBuilder: (BuildContext context, int index, Animation animation) {        
          if (index == _posts.length - 1) {
            page++;
            showPosts(page);

            return const Padding(
              padding: EdgeInsets.only(top: 10),
              child: Center(
                child: CircularProgressIndicator(),
              ),
            );
          } else {
            return ScaleTransition(
              scale: animation.drive(
                CurveTween(
                  curve: Curves.easeIn
                )
              ),
              child: PostCard(
                id: _posts[index].id,
                title: _posts[index].title,
                description: _posts[index].description,
                image: _posts[index].image,
                author: _posts[index].author,
                authorImage: _posts[index].authorImage,
                createdAt: _posts[index].createdAt,
                people: _posts[index].people,
                peopleImage: _posts[index].peopleImage
              ),
            );
          }
        },
      );
    }
  }
}