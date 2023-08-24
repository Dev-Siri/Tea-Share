import "package:cached_network_image/cached_network_image.dart";
import "package:flutter/material.dart";
import "package:provider/provider.dart";
import "package:tea_share/models/user_model.dart";
import "package:tea_share/services/theme_service.dart";
import "package:tea_share/services/users_service.dart";
import "package:tea_share/utils/formatting.dart";
import "package:tea_share/widgets/skeletons/profile_section_skeleton.dart";

class ProfileDrawer extends StatelessWidget with Formatting {
  const ProfileDrawer({ super.key });

  Future<void> _logout(BuildContext context) async {
    await context.read<UserService>().signOut();

    Navigator.pushReplacementNamed(context, "/auth");
  }

  @override
  Widget build(BuildContext context) {
    return Drawer(
      backgroundColor: context.watch<DarkThemeService>().darkTheme ? Colors.black : Colors.white,
      child: Padding(
        padding: const EdgeInsets.only(top: 60),
        child: Column(
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.only(left: 20),
              child: FutureBuilder(
                future: context.read<UserService>().user,
                builder: (BuildContext context, AsyncSnapshot<UserModel?> user) {
                  if (user.connectionState == ConnectionState.waiting || user.data == null) {
                    return const ProfileSectionSkeleton();
                  }
                
                  return Row(
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: <Widget>[
                      CircleAvatar(
                        backgroundImage: CachedNetworkImageProvider(user.data!.userImage),
                        radius: 50
                      ),
                      Padding(
                        padding: const EdgeInsets.only(left: 10),
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: <Widget>[
                            Text(user.data!.username,
                              style: const TextStyle(
                                fontSize: 24
                              ),
                            ),
                            Padding(
                              padding: const EdgeInsets.only(top: 4),
                              child: Text(formatHandle(user.data!.username),
                                style: TextStyle(
                                  color: Colors.grey.shade500
                                ),
                              )
                            ),
                          ],
                        ),
                      )
                    ],
                  );
                },
              ),
            ),
            const SizedBox(height: 30),
            ListTile(
              onTap: () => Navigator.pushNamed(context, "/profile"),
              leading: const Icon(Icons.person),
              title: const Text("Profile")
            ),
            const Spacer(flex: 1),
            ListTile(
              onTap: () => context.read<DarkThemeService>().darkTheme = !context.read<DarkThemeService>().darkTheme,
              leading: Icon(
                context.watch<DarkThemeService>().darkTheme ? Icons.dark_mode : Icons.light_mode
              ),
              title: Text(
                context.watch<DarkThemeService>().darkTheme ? "Dark Theme" : "Light Theme"
              )
            ),
            ListTile(
              onTap: () => Navigator.pushNamed(context, "/edit-profile"),
              leading: const Icon(Icons.edit),
              title: const Text("Edit Profile")
            ),
            ListTile(
              onTap: () => _logout(context),
              leading: const Icon(Icons.logout,
                color: Colors.red
              ),
              title: const Text("Logout",
                style: TextStyle(
                  color: Colors.red
                ),
              )
            ),
          ],
        ),
      ),
    );
  }
}