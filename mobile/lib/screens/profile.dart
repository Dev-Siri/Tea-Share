import 'package:cached_network_image/cached_network_image.dart';
import 'package:provider/provider.dart';
import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:tea_share/models/post_model.dart';

import 'package:tea_share/services/authentication_service.dart';
import 'package:tea_share/services/posts_service.dart';
import 'package:tea_share/services/theme_service.dart';
import 'package:tea_share/widgets/smaller_post_card.dart';

class Profile extends StatefulWidget {
  const Profile({ super.key });

  @override
  State<Profile> createState() => _ProfileState();
}

class _ProfileState extends State<Profile> {
  String _profileImage = "";
  String _username = "";

  List<Post> _posts = [];

  bool _isLoading = true;

  @override
  void initState() {
    if (mounted) {
      WidgetsFlutterBinding.ensureInitialized();
      final User? user = context.read<AuthenticationService>().user;
      
      setState(() => _isLoading = true);
      
      if (user != null) {
        setState(() {
          _profileImage = user.photoURL!;
          _username = user.displayName ?? "";
        });
      }

      context.read<PostService>().fetchPostsByQuery(
        query: _username,
        user: true
      ).then((List<Post> posts) {
        if (mounted) {
          setState(() {
            _posts = posts;
            _isLoading = false;
          });
        }
      });  
    }
    
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Column(
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
                padding: const EdgeInsets.all(20),
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
                      padding: const EdgeInsets.only(top: 5, bottom: 7),
                      child: Text(
                        '@${_username.toLowerCase().replaceAll(RegExp(r' '), '-')}',
                        style: const TextStyle(
                          fontSize: 18,
                          color: Colors.grey
                        ),
                      ),
                    ),
                    Text(
                      '${_isLoading ? 'Loading' : _posts.isEmpty ? 'No' : _posts.length} Posts${_isLoading ? '...' : ''}',
                      style: TextStyle(
                        fontSize: 18,
                        color: context.read<DarkThemeService>().darkTheme ?
                          Colors.grey.shade400 : Colors.grey.shade600 ,
                      ),
                    ),
                  ],
                ),
              )
            ],
          ),
        ),
        _isLoading ? const Center(
          child: CircularProgressIndicator()
        ) : _posts.isEmpty ?
        Padding(
          padding: const EdgeInsets.only(top: 120),
          child: Column(
            children: const <Widget>[
              Icon(Icons.add_a_photo,
                size: 80,
              ),
              Padding(
                padding: EdgeInsets.only(top: 8),
                child: Text('You have not posted anything yet.'),
              ),
            ],
          ),
        ) :
        SizedBox(
          height: 386,
          child: ListView.builder(
            itemCount: _posts.length,
            addAutomaticKeepAlives: false,
            shrinkWrap: true,
            scrollDirection: Axis.horizontal,
            itemBuilder: (BuildContext context, int index) {
              return SmallerPostCard(post: _posts[index]);
            },
          ),
        )
      ],
    );
  }
}