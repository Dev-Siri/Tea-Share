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
  final List<PostCard> _posts = [];

  final GlobalKey<AnimatedListState> _postListState = GlobalKey<AnimatedListState>();

  late bool _isLoadingPosts;
  bool _didErrorOccurr = false;

  @override
  void initState() {
    WidgetsFlutterBinding.ensureInitialized();
    if (mounted) {
      setState(() => _isLoadingPosts = true);

      page = 1;

      WidgetsBinding.instance.addPostFrameCallback((_) => showPosts(page));
    }
    
    super.initState();
  }

  void showPosts(int page) {
    const int postFetchLimit = 4;

    if (mounted) {
      context.read<PostService>()
        .fetchPosts(
          limit: postFetchLimit,
          page: page
        )
        .then((List<Post> posts) {
        
        Future<void> delay = Future(() {});

        setState(() {
          _isLoadingPosts = false;
           
          for (Post post in posts) {
            delay = delay.then((_) => Future.delayed(const Duration(milliseconds: 50), () {            
              _posts.add(
                PostCard(
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
            }));
          }
        });
      })
      .catchError((_) {
        if (mounted) {
          setState(() {
            _isLoadingPosts = false;
            _didErrorOccurr = true;
          });
        }
        return null;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    if (_isLoadingPosts) {
      return const Center(
        child: CircularProgressIndicator(),
      );
    } else if (_didErrorOccurr) {
      return const ErrorMessage(
        icon: Icons.error,
        message: "Failed to get posts. Please try again later."
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
              child: _posts[index],
            );
          }
        },
      );
    }
  }
}