import "package:flutter/material.dart";
import "package:provider/provider.dart";
import "package:tea_share/services/theme_service.dart";
import "package:tea_share/services/users_service.dart";

class Settings extends StatefulWidget {
  const Settings({ super.key });

  @override
  State<Settings> createState() => _SettingsState();
}

class _SettingsState extends State<Settings> {
  Future<void> _logout() async {
    await context.read<UserService>().signOut();

    Navigator.pushReplacementNamed(context, "/auth");
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(20),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          const Text("Theme Options",
            style: TextStyle(
              fontWeight: FontWeight.bold,
              fontSize: 22
            ),
          ),
          Container(
            margin: const EdgeInsets.symmetric(vertical: 15),
            width: 400,
            height: 40,
            child: ElevatedButton.icon(
              onPressed: () => context.read<DarkThemeService>().darkTheme = false,
              icon: const Icon(Icons.wb_sunny_rounded,
                size: 22
              ),
              style: ButtonStyle(
                backgroundColor: MaterialStatePropertyAll(Theme.of(context).primaryColor),
                foregroundColor: const MaterialStatePropertyAll(Colors.white),
                shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                  RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10),
                  ),
                ),
              ),
              label: const Text("Switch to Light Theme"),
            ),
          ),
          SizedBox(
            width: 400,
            height: 40,
            child: ElevatedButton.icon(
              onPressed: () => context.read<DarkThemeService>().darkTheme = true,
              icon: const Icon(Icons.nightlight_round_outlined,
                size: 22
              ),
              style: ButtonStyle(
                backgroundColor: MaterialStatePropertyAll(Theme.of(context).primaryColor),
                foregroundColor: const MaterialStatePropertyAll(Colors.white),
                shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                  RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10),
                  ),
                ),
              ),
              label: const Text("Switch to Dark Theme"),
            ),
          ),
          const Padding(
            padding: EdgeInsets.only(top: 20),
            child: Text("User Settings",
              style: TextStyle(
                fontWeight: FontWeight.bold,
                fontSize: 22
              ),
            ),
          ),
          Container(
            margin: const EdgeInsets.only(top: 15),
            width: 400,
            height: 40,
            child: ElevatedButton.icon(
              onPressed: () => Navigator.pushNamed(context, "/edit-profile"),
              icon: const Icon(Icons.person,
                size: 22
              ),
              style: ButtonStyle(
                backgroundColor: MaterialStatePropertyAll(Theme.of(context).primaryColor),
                foregroundColor: const MaterialStatePropertyAll(Colors.white),
                shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                  RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10),
                  ),
                ),
              ),
              label: const Text("Edit Profile"),
            ),
          ),
          Container(
            margin: const EdgeInsets.only(top: 15),
            width: 400,
            height: 40,
            child: ElevatedButton.icon(
              onPressed: _logout,
              icon: const Icon(Icons.logout,
                size: 22
              ),
              style: ButtonStyle(
                backgroundColor: MaterialStatePropertyAll(Theme.of(context).primaryColor),
                foregroundColor: const MaterialStatePropertyAll(Colors.white),
                shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                  RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10),
                  ),
                ),
              ),
              label: const Text("Logout"),
            ),
          ),
        ],
      ),
    );
  }
}