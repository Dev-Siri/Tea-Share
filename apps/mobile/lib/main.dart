import "package:flutter/material.dart";
import "package:provider/provider.dart";
import "package:tea_share/models/user_model.dart";
import "package:tea_share/routes.dart";
import "package:tea_share/services/posts_service.dart";
import "package:tea_share/services/theme_service.dart" show DarkThemeService;
import "package:tea_share/services/users_service.dart";

void main() => runApp(const App());

class App extends StatelessWidget {
  const App({ super.key });

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        Provider<UserService>(create: (_) => UserService()),
        Provider<PostService>(create: (_) => PostService()),
        ChangeNotifierProvider<DarkThemeService>(create: (_) => DarkThemeService()),
      ],
      builder: (_, __) => const StateWrapper(),
    );
  }
}

class StateWrapper extends StatefulWidget {
  const StateWrapper({ super.key });

  @override
  State<StateWrapper> createState() => _StateWrapperState();
}

class _StateWrapperState extends State<StateWrapper> {
  @override
  void initState() {    
    WidgetsFlutterBinding.ensureInitialized();
    _setApplicationTheme();

    super.initState();
  }

  Future<void> _setApplicationTheme() async => context.read<DarkThemeService>().darkTheme = await context.read<DarkThemeService>().darkThemePreference.getTheme();

  @override
  Widget build(BuildContext context) {
    return FutureBuilder(
      future: context.read<UserService>().user,
      builder: (BuildContext context, AsyncSnapshot<UserModel?> user) {
        if (user.connectionState == ConnectionState.waiting) {
          return const CircularProgressIndicator();
        }

        return MaterialApp(
          initialRoute: user.hasData ? "/" : "/auth",
          routes: routes,
          theme: ThemeData.light(useMaterial3: true).copyWith(
            primaryColor: const Color.fromARGB(255, 59, 41, 94),
          ),
          darkTheme: ThemeData.dark(useMaterial3: true).copyWith(
            primaryColor: const Color.fromARGB(255, 59, 41, 94)
          ),
          themeMode: context.watch<DarkThemeService>().darkTheme ? ThemeMode.dark : ThemeMode.light,
        );
      },
    );
  }
}