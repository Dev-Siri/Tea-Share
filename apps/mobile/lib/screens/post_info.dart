import "package:cached_network_image/cached_network_image.dart";
import "package:flutter/material.dart";
import "package:provider/provider.dart";
import "package:tea_share/models/post_model.dart";
import "package:tea_share/models/user_model.dart";
import "package:tea_share/services/theme_service.dart";
import "package:tea_share/widgets/user_tile.dart";

class PostInfo extends StatelessWidget {
  const PostInfo({ super.key });

  @override
  Widget build(BuildContext context) {
    final PostModel post = ModalRoute.of(context)!.settings.arguments as PostModel;
    
    return Scaffold(
      backgroundColor: context.watch<DarkThemeService>().darkTheme ? Colors.black : Colors.white,
      body: SafeArea(
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              Stack(
                children: <Widget>[
                  Hero(
                    tag: post.title,
                    child: CachedNetworkImage(
                      width: double.infinity,
                      imageUrl: post.postImage,
                      progressIndicatorBuilder: (BuildContext context, String url, DownloadProgress progress) => const CircularProgressIndicator(),
                      fit: BoxFit.fill,
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(16),
                    child: Container(
                      decoration: BoxDecoration(
                        color: const Color.fromARGB(126, 92, 92, 92),
                        borderRadius: BorderRadius.circular(100),
                      ),
                      child: IconButton(
                        onPressed: () => Navigator.pop(context),
                        icon: const Icon(Icons.arrow_back_rounded,
                          color: Colors.white,
                        )
                      ),
                    ),
                  ),
                ]
              ),
              Padding(
                padding: const EdgeInsets.all(20),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    Text(post.title,
                      style: const TextStyle(
                        fontSize: 25,
                        fontWeight: FontWeight.bold
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.only(top: 10),
                      child: Text(post.description,
                        style: const TextStyle(
                          color: Colors.grey
                        ),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.only(top: 10),
                      child: Row(
                        children: <Widget>[
                          MaterialButton(
                            shape: const CircleBorder(),
                            padding: EdgeInsets.zero,
                            minWidth: 18,
                            onPressed: () => Navigator.pushNamed(
                              context,
                              "/other-profile",
                              arguments: UserModel(
                                email: post.postId,
                                username: post.username,
                                userImage: post.userImage,
                              ),
                            ),
                            child: Hero(
                              tag: post.userId,
                              child: CircleAvatar(
                                radius: 18,
                                backgroundImage: CachedNetworkImageProvider(post.userImage)
                              ),
                            ),
                          ),
                          Text(post.username,
                            style: const TextStyle(
                              fontWeight: FontWeight.bold
                            ),
                          )
                        ],
                      ),
                    ),
                    const Padding(
                      padding: EdgeInsets.only(top: 15),
                      child: Text("People who liked this post",
                        style: TextStyle(
                          fontSize: 25,
                          fontWeight: FontWeight.bold
                        ),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.only(top: 15),
                      child: Card(
                        surfaceTintColor: Colors.grey,
                        child: SizedBox(
                          height: MediaQuery.of(context).size.height - 520,
                          child: ListView.builder(
                            itemCount: post.likes.length,
                            itemBuilder: (BuildContext context, int index) {
                              return UserTile(
                                username: post.likes[index].username,
                                userImage: post.likes[index].userImage,
                              );
                            }
                          ),
                        )
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}