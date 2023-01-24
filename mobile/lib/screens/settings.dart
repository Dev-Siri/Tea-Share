import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:tea_share/services/authentication_service.dart';

import 'package:tea_share/services/theme_service.dart' show DarkThemeService;

class Settings extends StatefulWidget {
  const Settings({ super.key });

  @override
  State<Settings> createState() => _SettingsState();
}

class _SettingsState extends State<Settings> {
  Future<void> _logout() async {
    await context.read<AuthenticationService>().signOut();

    Navigator.pushReplacementNamed(context, '/auth');
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(20),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          const Text('Theme Options',
            style: TextStyle(
              fontWeight: FontWeight.bold,
              fontSize: 22
            ),
          ),
          Container(
            margin: const EdgeInsets.only(top: 15),
            width: 400,
            height: 40,
            decoration: const BoxDecoration(
              color: Colors.blue,
              borderRadius: BorderRadius.all(Radius.circular(5))
            ),
            child: ElevatedButton.icon(
              onPressed: () => context.read<DarkThemeService>().darkTheme = false,
              icon: const Icon(Icons.wb_sunny_rounded,
                size: 22
              ),
              label: const Text('Switch to Light Theme',
                style: TextStyle(
                  color: Colors.white,
                ),
              ),
            ),
          ),
          Container(
            margin: const EdgeInsets.only(top: 15),
            width: 400,
            height: 40,
            decoration: const BoxDecoration(
              color: Colors.blue,
              borderRadius: BorderRadius.all(Radius.circular(5))
            ),
            child: ElevatedButton.icon(
              onPressed: () => context.read<DarkThemeService>().darkTheme = true,
              icon: const Icon(Icons.nightlight_round_outlined,
                size: 22
              ),
              label: const Text('Switch to Dark Theme',
                style: TextStyle(
                  color: Colors.white,
                ),
              ),
            ),
          ),
          const Padding(
            padding: EdgeInsets.only(top: 20),
            child: Text('User Settings',
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
            decoration: const BoxDecoration(
              color: Colors.blue,
              borderRadius: BorderRadius.all(Radius.circular(5))
            ),
            child: ElevatedButton.icon(
              onPressed: () => Navigator.pushNamed(context, '/edit-profile'),
              icon: const Icon(Icons.person,
                size: 22
              ),
              label: const Text('Edit Profile',
                style: TextStyle(
                  color: Colors.white,
                ),
              ),
            ),
          ),
          Container(
            margin: const EdgeInsets.only(top: 15),
            width: 400,
            height: 40,
            decoration: const BoxDecoration(
              color: Colors.blue,
              borderRadius: BorderRadius.all(Radius.circular(5))
            ),
            child: ElevatedButton.icon(
              onPressed: _logout,
              icon: const Icon(Icons.logout,
                size: 22
              ),
              label: const Text('Logout',
                style: TextStyle(
                  color: Colors.white,
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}