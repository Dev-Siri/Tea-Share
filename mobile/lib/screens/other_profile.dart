import 'package:cached_network_image/cached_network_image.dart';
import 'package:provider/provider.dart';
import 'package:flutter/material.dart';
import 'package:tea_share/models/post_model.dart';
import 'package:tea_share/models/user_model.dart';

import 'package:tea_share/services/posts_service.dart';
import 'package:tea_share/services/theme_service.dart';
import 'package:tea_share/widgets/smaller_post_card.dart';

class OtherProfile extends StatefulWidget {
  const OtherProfile({ super.key });

  @override
  State<OtherProfile> createState() => _OtherProfileState();
}

class _OtherProfileState extends State<OtherProfile> {  
  List<Post> _posts = [];
  bool _isLoading = true;

  @override
  void didChangeDependencies() {
    if (mounted) {
      WidgetsFlutterBinding.ensureInitialized();
      final User user = ModalRoute.of(context)!.settings.arguments as User;

      setState(() => _isLoading = true);

      context.read<PostService>().fetchPostsByQuery(
        query: user.username,
        user: true
      ).then((List<Post> posts) => setState(() {
        _posts = posts;
        _isLoading = false;
      }));
    }
    
    super.didChangeDependencies();
  }

  @override
  Widget build(BuildContext context) {
    final User user = ModalRoute.of(context)!.settings.arguments as User;

    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.blue,
        title: const Text('Tea Share'),
        leading: BackButton(
          onPressed: () => Navigator.pop(context)
        )
      ),
      body: Column(
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.all(20),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.start,
              children: <Widget>[
                Hero(
                  tag: user.email,
                  child: CircleAvatar(
                    radius: 50,
                    backgroundImage: CachedNetworkImageProvider(user.image),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(20),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                      Text(user.username,
                        style: const TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 28
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.only(top: 5, bottom: 7),
                        child: Text(
                          '@${user.username.toLowerCase().replaceAll(RegExp(r' '), '-')}',
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
              children: <Widget>[
                const Icon(Icons.no_photography,
                  size: 80,
                ),
                Padding(
                  padding: const EdgeInsets.only(top: 8),
                  child: Text('${user.username} has not posted anything yet.'),
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
      ),
    );
  }
}