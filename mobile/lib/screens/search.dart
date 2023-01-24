import 'package:firebase_auth/firebase_auth.dart' as firebase_auth;
import 'package:provider/provider.dart';
import 'package:flutter/material.dart';
import 'package:tea_share/models/post_model.dart';
import 'package:tea_share/models/user_model.dart';
import 'package:tea_share/services/authentication_service.dart';
import 'package:tea_share/services/posts_service.dart';
import 'package:tea_share/services/theme_service.dart';

import 'package:tea_share/services/users_service.dart';
import 'package:tea_share/widgets/post_card.dart';
import 'package:tea_share/widgets/user_tile.dart';

class Search extends StatefulWidget {
  const Search({ super.key });

  @override
  State<Search> createState() => _SearchState();
}

class _SearchState extends State<Search> {
  final TextEditingController _searchController = TextEditingController();

  User? _user;
  List<Post> _posts = [];

  bool _isLoading = false;
  bool _isBuildFinishedExecuting = false;

  @override
  void initState() {
    final firebase_auth.User? user = context.read<AuthenticationService>().user;

    context.read<UserService>().fetchUserByQuery(query: user?.displayName ?? "").then((User user) => setState(() => _user = user));
    context.read<PostService>().fetchPostsByQuery(query: user?.displayName ?? "", user: true).then((List<Post> posts) => setState(() => _posts = posts));

    setState(() => _isBuildFinishedExecuting = true);

    super.initState();
  }

  Future<void> _search() async {
    if (_searchController.text.isNotEmpty) {
      setState(() => _isLoading = true);
      
      final User user = await context.read<UserService>().fetchUserByQuery(query: _searchController.text);

      final List<Post> posts = await context.read<PostService>().fetchPostsByQuery(query: _searchController.text, user: true);

      setState(() {
        _user = user;
        _posts = posts;
        _isLoading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        body: Visibility(
          visible: _isBuildFinishedExecuting,
          replacement: const Center(
            child: CircularProgressIndicator(),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              TextField(
                controller: _searchController,
                decoration: InputDecoration(
                  border: const OutlineInputBorder(),
                  prefixIcon: SizedBox(
                    width: 50,
                    child: ElevatedButton(
                      style: ElevatedButton.styleFrom(
                        shape: const CircleBorder(),
                        elevation: 0,
                        backgroundColor: context.read<DarkThemeService>().darkTheme ? const Color.fromRGBO(50, 50, 50, 1) : Colors.transparent,
                      ),
                      onPressed: () => Navigator.pop(context),
                      child: Icon(Icons.arrow_back,
                        color: context.read<DarkThemeService>().darkTheme ? Colors.grey.shade100 : Colors.grey.shade900,
                      ),
                    ),
                  ),
                  suffixIcon: ElevatedButton(
                    style: ElevatedButton.styleFrom(
                      shape: const CircleBorder(),
                      elevation: 0,
                      disabledBackgroundColor: context.read<DarkThemeService>().darkTheme ? const Color.fromRGBO(50, 50, 50, 1) : Colors.transparent,
                      backgroundColor: context.read<DarkThemeService>().darkTheme ? const Color.fromRGBO(50, 50, 50, 1) : Colors.transparent,
                    ),
                    onPressed: _isLoading ? null : _search,
                    child: _isLoading ? const CircularProgressIndicator(strokeWidth: 4) : const Icon(Icons.search,
                      color: Colors.blue,
                    )
                  ),
                  hintText: 'Search for people.'
                ),
              ),
              const Padding(
                padding: EdgeInsets.only(top: 20, left: 20),
                child: Text('People',
                  style: TextStyle(
                    fontSize: 30,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.all(20),
                child: Card(
                  child: UserTile(user: _user!),
                ),
              ),
              const Padding(
                padding: EdgeInsets.only(top: 20, left: 20),
                child: Text('Posts by People',
                  style: TextStyle(
                    fontSize: 30,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
              Expanded(
                child: Padding(
                  padding: const EdgeInsets.all(20),
                  child: ListView.builder(
                    itemCount: _posts.length,
                    itemBuilder: (BuildContext context, int index) {
                      return PostCard(
                        id: _posts[index].id,
                        title: _posts[index].title,
                        description: _posts[index].description,
                        author: _posts[index].author,
                        authorImage: _posts[index].authorImage,
                        image: _posts[index].image,
                        createdAt: _posts[index].createdAt,
                        people: _posts[index].people,
                        peopleImage: _posts[index].peopleImage
                      );
                    },
                  ),
                ),
              ),
            ]
          )
        )
      ),
    );
  }
}