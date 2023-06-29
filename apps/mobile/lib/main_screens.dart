import "package:bottom_bar_page_transition/bottom_bar_page_transition.dart";
import "package:cached_network_image/cached_network_image.dart";
import "package:flutter/material.dart";
import "package:provider/provider.dart";
import "package:tea_share/models/user_model.dart";
import "package:tea_share/screens/home.dart";
import "package:tea_share/screens/people.dart";
import "package:tea_share/screens/profile.dart";
import "package:tea_share/screens/settings.dart";
import "package:tea_share/services/users_service.dart";

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
    return Scaffold(
      appBar: AppBar(
        actions: <Widget>[
          IconButton(
            icon: const Icon(Icons.search),
            tooltip: "Search",
            onPressed: () => Navigator.pushNamed(context, "/search"),
          ),
        ],
        title: Row(
          children: <Widget>[
            Container(
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
            const Padding(
              padding: EdgeInsets.only(left: 8),
              child: Text("Tea Share"),
            )
          ],
        )
      ),
      body: BottomBarPageTransition(
        builder: (_, index) => _screens[index],
        currentIndex: _currentTab,
        totalLength: _screens.length,
        transitionType: TransitionType.slide,
        transitionCurve: Curves.easeOut,
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => Navigator.pushNamed(context, "/create-post"),
        tooltip: "Create A Post",
        heroTag: "Go To Create Post Screen",
        backgroundColor: Theme.of(context).primaryColor,
        child: const Icon(Icons.add),
      ),
      bottomNavigationBar: NavigationBar(
        selectedIndex: _currentTab,
        onDestinationSelected: (int index) => setState(() => _currentTab = index),
        destinations: <NavigationDestination>[
          const NavigationDestination(
            icon: Icon(Icons.home),
            label: "Home",
          ),
          const NavigationDestination(
            icon: Icon(Icons.people),
            label: "People",
          ),
          NavigationDestination(
            icon: FutureBuilder(
              future: context.read<UserService>().user,
              builder: (BuildContext context, AsyncSnapshot<UserModel?> user) {
                if (user.connectionState == ConnectionState.waiting) {
                  return const CircularProgressIndicator();
                }

                return CircleAvatar(
                  radius: 15,
                  backgroundImage: CachedNetworkImageProvider(user.data?.userImage ?? ""),
                );
              }
            ),
            label: "Profile",
          ),
          const NavigationDestination(
            icon: Icon(Icons.settings),
            label: "Settings",
          ),
        ],
      ),
    );
  }
}
