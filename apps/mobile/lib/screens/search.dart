import "package:flutter/material.dart";
import "package:provider/provider.dart";
import "package:tea_share/models/post_model.dart";
import "package:tea_share/models/user_model.dart";
import "package:tea_share/services/posts_service.dart";
import "package:tea_share/services/users_service.dart";
import "package:tea_share/widgets/error_message.dart";
import "package:tea_share/widgets/post_card.dart";
import "package:tea_share/widgets/user_tile.dart";

class Search extends StatefulWidget {
  const Search({ super.key });

  @override
  State<Search> createState() => _SearchState();
}

int page = 1;

class _SearchState extends State<Search> {
  final TextEditingController _searchController = TextEditingController();

  String? _errorMessage;
  String _searchType = "posts";
  bool _isLoading = false;
  List<PostModel> _posts = [];
  List<UserModel> _users = [];

  @override
  void initState() {
    setState(() {
      _searchType = "posts";
      page = 1;
    });

    super.initState();
  }

  @override
  void dispose() {
    _searchController.dispose();

    super.dispose();
  }

  Future<void> _changeSearchMode(String searchType) async {
    page = 1;

    setState(() => _searchType = searchType);

    await _search();
  }

  Future<void> _search() async {
    if (_searchController.text.isEmpty) return;
    
    setState(() => _isLoading = true);

    if (_searchType == "users") {
      final UsersServiceResponse usersResponse = await context.read<UserService>().fetchUserByName(
        name: _searchController.text,
        page: page,
        limit: 8,
      );

      setState(() {
       if (usersResponse.successful && usersResponse.users != null) {
         _users = [..._users, ...usersResponse.users!];
       } else {
         _errorMessage = usersResponse.errorMessage;
       }

       _isLoading = false;
     });

     return;
    }

    final PostsServiceResponse postsResponse = await context.read<PostService>().fetchPostsByQuery(
      query: _searchController.text,
      type: "normal",
      page: page,
      limit: 8,
    );

     setState(() {
       if (postsResponse.successful && postsResponse.posts != null) {
         _posts = [..._posts, ...postsResponse.posts!];
       } else {
         _errorMessage = postsResponse.errorMessage;
       }

       _isLoading = false;
     });
  }

  @override
  Widget build(BuildContext context) {
    return Visibility(
      visible: _errorMessage == null,
      replacement: ErrorMessage(
        icon: Icons.error,
        message: _errorMessage ?? "An error occured when searching for posts & people.",
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.all(10),
            child: TextField(
              controller: _searchController,
              decoration: InputDecoration(
                contentPadding: const EdgeInsets.only(
                  top: 10,
                  left: 20
                ),
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(10)),
                suffixIcon: ElevatedButton(
                  style: ElevatedButton.styleFrom(
                    shape: const CircleBorder(),
                    elevation: 0,
                    disabledBackgroundColor: Colors.transparent,
                    backgroundColor: Colors.transparent,
                  ),
                  onPressed: _isLoading ? null : _search,
                  child: _isLoading ? const CircularProgressIndicator(strokeWidth: 4) : const Icon(Icons.search)
                ),
                hintText: "Search"
              ),
            ),
          ),
          Row(
            children: <Widget>[
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 10),
                child: ElevatedButton(
                  style: ButtonStyle(
                    backgroundColor: _searchType == "posts" ? MaterialStatePropertyAll(Theme.of(context).primaryColor) : const MaterialStatePropertyAll(Colors.transparent),
                    foregroundColor: const MaterialStatePropertyAll(Colors.white),
                    shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                      RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(10),
                      ),
                    ),
                  ),
                  onPressed: () => _changeSearchMode("posts"),
                  child: const Text("Posts")
                ),
              ),
              ElevatedButton(
                style: ButtonStyle(
                  backgroundColor: _searchType == "users" ? MaterialStatePropertyAll(Theme.of(context).primaryColor) : const MaterialStatePropertyAll(Colors.transparent),
                  foregroundColor: const MaterialStatePropertyAll(Colors.white),
                  shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                    RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(10),
                    ),
                  ),
                ),
                onPressed: () => _changeSearchMode("users"),
                child: const Text("People")
              ),
            ],
          ),
          Expanded(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 10),
              child: Visibility(
                visible:
                  (_searchType == "posts" && _posts.isNotEmpty)
                  || (_searchType == "users" && _users.isNotEmpty)
                  || _isLoading,
                replacement: const Center(
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: <Widget>[
                      Icon(Icons.search,
                        size: 77
                      ),
                      Text("Search for something awesome!",
                        style: TextStyle(
                          fontSize: 22
                        ),
                      )
                    ],
                  ),
                ),
                child: ListView.builder(
                  itemCount: _searchType == "posts" ? _posts.length : _users.length,
                  addAutomaticKeepAlives: false,
                  itemBuilder: (BuildContext context, int index) {
                    if (
                      index == (
                        _searchType == "posts" ? _posts.length : _users.length
                      ) - 1
                      || !_isLoading
                    ) {
                      page++;
                      _search();

                      /*
                        Returning a value here for showing a loading indicator would actually
                        instead place it on top of the content on the initial render, so its not possible
                        without adding an additional state variable that is updated when the initial load
                        happens and then show the skeletons based on that.
                      */
                    }

                    if (_searchType == "users") {
                      return UserTile(
                        username: _users[index].username,
                        userImage: _users[index].userImage,
                      );
                    }

                    return PostCard(
                      postId: _posts[index].postId,
                      title: _posts[index].title,
                      description: _posts[index].description,
                      postImage: _posts[index].postImage,
                      userId: _posts[index].userId,
                      username: _posts[index].username,
                      userImage: _posts[index].userImage,
                      createdAt: _posts[index].createdAt,
                      likes: _posts[index].likes,
                    );
                  },
                ),
              ),
            ),
          ),
        ]
      ),
    );
  }
}