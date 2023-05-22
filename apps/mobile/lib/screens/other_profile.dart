import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:tea_share/models/post_model.dart';
import 'package:tea_share/models/user_model.dart';
import 'package:tea_share/services/posts_service.dart';
import 'package:tea_share/services/theme_service.dart';
import 'package:tea_share/widgets/error_message.dart';
import 'package:tea_share/widgets/post_grid.dart';

class OtherProfile extends StatefulWidget {
  const OtherProfile({ super.key });

  @override
  State<OtherProfile> createState() => _OtherProfileState();
}

class _OtherProfileState extends State<OtherProfile> {  
  List<PostModel> _posts = [];
  bool _isLoading = true;

  String? _errorMessage;

  @override
  void didChangeDependencies() {
    if (mounted) {
      WidgetsFlutterBinding.ensureInitialized();
      final UserModel user = ModalRoute.of(context)!.settings.arguments as UserModel;

      setState(() => _isLoading = true);

      context.read<PostService>().fetchPostsByQuery(query: user.username).then((PostsServiceResponse postsResponse) {
        setState(() {
          if (postsResponse.successful) {
            _posts = postsResponse.posts!;
          } else {
            _errorMessage = postsResponse.errorMessage;
          }
          _isLoading = false;
        });
      });
    }
    
    super.didChangeDependencies();
  }

  @override
  Widget build(BuildContext context) {
    final UserModel user = ModalRoute.of(context)!.settings.arguments as UserModel;

    return Scaffold(
      appBar: AppBar(
        leading: BackButton(
          onPressed: () => Navigator.pop(context),
        ),
        title: Text('${user.username}\'s Profile'),
      ),
      body: Visibility(
        visible: _errorMessage == null,
        replacement: ErrorMessage(
          icon: Icons.error,
          message: _errorMessage ?? 'An Error occured when trying to load ${user.username}\'s profile.',
        ),
        child: ListView(
          addAutomaticKeepAlives: false,
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
                      child: Text('You have not posted anything yet.'),
                    ),
                  ],
                ),
              ),
              child: PostGrid(posts: _posts)
            ),
            child: const Center(
                child: CircularProgressIndicator()
              ),
            ),
          ],
        ),
      ),
    );
  }
}