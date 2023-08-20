import "package:bottom_bar_page_transition/bottom_bar_page_transition.dart";
import "package:flutter/material.dart";
import "package:flutter_vector_icons/flutter_vector_icons.dart";
import "package:provider/provider.dart";
import "package:tea_share/screens/home.dart";
import "package:tea_share/screens/people.dart";
import "package:tea_share/screens/search.dart";
import "package:tea_share/services/theme_service.dart";
import "package:tea_share/widgets/profile_drawer.dart";
import 'package:tea_share/widgets/top_bar.dart';

class MainScreens extends StatefulWidget {
  const MainScreens({ super.key });

  @override
  State<MainScreens> createState() => _MainScreensState();
}

class _MainScreensState extends State<MainScreens> {
  int _currentTab = 0;

  final List<Widget> _screens = [
    const Home(),
    const Search(),
    const People(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: context.watch<DarkThemeService>().darkTheme ? Colors.black : Colors.white,
      drawer: const ProfileDrawer(),
      appBar: const TopBar(),
      body: BottomBarPageTransition(
        builder: (_, index) => _screens[index],
        currentIndex: _currentTab,
        totalLength: _screens.length,
        transitionType: TransitionType.slide,
        transitionCurve: Curves.easeOut,
      ),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentTab,
        onTap: (int index) => setState(() => _currentTab = index),
        showSelectedLabels: false,
        showUnselectedLabels: false,
        unselectedItemColor: context.watch<DarkThemeService>().darkTheme ? Colors.white : Colors.black,
        selectedItemColor: context.watch<DarkThemeService>().darkTheme ? Colors.white : Colors.black,
        items: <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(_currentTab == 0 ? MaterialCommunityIcons.tea : MaterialCommunityIcons.tea_outline),
            label: "Home",
          ),
          const BottomNavigationBarItem(
            icon: Icon(Icons.search),
            label: "Search",
          ),
          BottomNavigationBarItem(
            label: "People",
            icon: Icon(_currentTab == 2 ? Icons.people : Icons.people_outline),
          ),
        ],
      ),
    );
  }
}
