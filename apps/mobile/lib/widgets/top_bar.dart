import "package:cached_network_image/cached_network_image.dart";
import "package:flutter/material.dart";
import "package:flutter_vector_icons/flutter_vector_icons.dart";
import "package:provider/provider.dart";
import "package:tea_share/models/user_model.dart";
import "package:tea_share/services/theme_service.dart";
import "package:tea_share/services/users_service.dart";

class TopBar extends StatelessWidget implements PreferredSizeWidget {
  final bool? showBackButton;

  const TopBar({
    super.key,
    this.showBackButton,
  });

  @override
  Size get preferredSize => const Size.fromHeight(60);

  @override
  Widget build(BuildContext context) {
    final Color bgColor = context.watch<DarkThemeService>().darkTheme ? Colors.black : Colors.white;

    return AppBar(
      backgroundColor: bgColor,
      surfaceTintColor: bgColor,
      centerTitle: true,
      // == true, might trigger you but its just for null-safety
      leading: showBackButton == true ? BackButton(
        onPressed: () => Navigator.pop(context),
      ) : Builder(
        builder: (BuildContext context) {
          return IconButton(
            onPressed: () => Scaffold.of(context).openDrawer(),
            icon: FutureBuilder(
              future: context.read<UserService>().user,
              builder: (BuildContext context, AsyncSnapshot<UserModel?> user) {
                if (user.connectionState == ConnectionState.waiting) {
                  return const CircularProgressIndicator();
                }
    
                return CircleAvatar(
                  radius: 25,
                  backgroundImage: CachedNetworkImageProvider(user.data?.userImage ?? ""),
                );
              }
            ),
          );
        }
      ),
      title: Container(
        padding: const EdgeInsets.all(6),
        margin: const EdgeInsets.only(bottom: 5),
        decoration: BoxDecoration(
          color: Theme.of(context).primaryColor,
          borderRadius: BorderRadius.circular(100)
        ),
        child: Image.asset("assets/Logo.gif",
          height: 40,
          width: 40,
        ),
      ),
      actions: <Widget>[
        IconButton(
          onPressed: () => Navigator.pushNamed(context, "/create-post"),
          icon: const Icon(MaterialCommunityIcons.tea,
            size: 30,
          ),
        )
      ],
    );
  }
}