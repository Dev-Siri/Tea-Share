import 'package:bottom_bar_page_transition/bottom_bar_page_transition.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:provider/provider.dart';
import 'package:flutter/material.dart';

import 'package:tea_share/screens/home.dart';
import 'package:tea_share/screens/profile.dart';
import 'package:tea_share/screens/people.dart';
import 'package:tea_share/screens/settings.dart';
import 'package:tea_share/services/authentication_service.dart';

class MainScreens extends StatefulWidget {
  const MainScreens({ super.key });

  @override
  State<MainScreens> createState() => _MainScreensState();
}

class _MainScreensState extends State<MainScreens> {
  int _currentTab = 0;

  final List<Widget> _screens = [
    const Home(),
    const People(),
    const Profile(),
    const Settings(),
  ];

  @override
  Widget build(BuildContext context) {
    final User? user = context.read<AuthenticationService>().user;

    return Scaffold(
      appBar: AppBar(
        leading: Padding(
          padding: const EdgeInsets.all(6),
          child: Image.asset(
            'assets/LogoWhite.gif',
          ),
        ),
        actions: <Widget>[
          IconButton(
            icon: const Icon(Icons.search,
              color: Colors.white,
            ),
            tooltip: 'Search',
            onPressed: () => Navigator.pushNamed(context, '/search'),
          ),
        ],
        backgroundColor: Colors.blue,
        title: const Text('Tea Share',
          style: TextStyle(
            color: Colors.white
          ),
        ),
      ),
      body: BottomBarPageTransition(
        builder: (_, index) => _screens[index],
        currentIndex: _currentTab,
        totalLength: _screens.length,
        transitionType: TransitionType.slide,
        transitionCurve: Curves.easeIn,
      ),
      floatingActionButton: Visibility(
        visible: true,
        child: FloatingActionButton(
          onPressed: () => Navigator.pushNamed(context, '/create-post'),
          backgroundColor: Colors.blue,
          tooltip: 'Create a Post',
          child: const Icon(Icons.add,
            color: Colors.white,
          ),
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentTab,
        onTap: (int index) => setState(() => _currentTab = index),
        selectedItemColor: Colors.blue,
        unselectedItemColor: Colors.grey,
        items: <BottomNavigationBarItem>[
          const BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          const BottomNavigationBarItem(
            icon: Icon(Icons.people),
            label: 'People',
          ),
          BottomNavigationBarItem(
            icon: Visibility(
              visible: user != null,
              replacement: const CircularProgressIndicator(),
              child: CircleAvatar(
                radius: 15,
                backgroundImage: CachedNetworkImageProvider(user!.photoURL ?? ""),
              )
            ),
            label: 'Profile',
          ),
          const BottomNavigationBarItem(
            icon: Icon(Icons.settings),
            label: 'Settings',
          ),
        ],
      ),
    );
  }
}
