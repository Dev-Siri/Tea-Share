import "package:flutter/material.dart";
import "package:provider/provider.dart";
import "package:tea_share/models/like_model.dart";
import "package:tea_share/services/theme_service.dart";
import "package:tea_share/widgets/top_bar.dart";
import "package:tea_share/widgets/user_tile.dart";

class PostLikes extends StatelessWidget {
  const PostLikes({super.key});

  @override
  Widget build(BuildContext context) {
    final List<LikeModel> likes = ModalRoute.of(context)!.settings.arguments as List<LikeModel>;

    return Scaffold(
      backgroundColor: context.watch<DarkThemeService>().darkTheme ? Colors.black : Colors.white,
      appBar: const TopBar(showBackButton: true),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          const Padding(
            padding: EdgeInsets.all(16),
            child: Text("People who liked this post.",
              style: TextStyle(
                fontSize: 22
              ),
            ),
          ),
          Expanded(
            child: ListView.builder(
              addAutomaticKeepAlives: false,
              itemCount: likes.length,
              itemBuilder: (BuildContext context, int index) {
                return UserTile(
                  username: likes[index].username,
                  userImage: likes[index].userImage
                );
              },
            ),
          ),
        ]
      ),
    );
  }
}