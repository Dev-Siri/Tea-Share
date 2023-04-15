import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:tea_share/firebase_options.dart';
import 'package:tea_share/routes.dart';
import 'package:tea_share/services/posts_service.dart';
import 'package:tea_share/services/theme_service.dart' show DarkThemeService;
import 'package:tea_share/services/users_service.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp(options: DefaultFirebaseOptions.currentPlatform);
  runApp(const App());
}

class App extends StatelessWidget {
  const App({ super.key });

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        Provider<UserService>(create: (_) => UserService(FirebaseAuth.instance)),
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
  String _initialRoute = '/';
  
  @override
  void initState() {
    WidgetsFlutterBinding.ensureInitialized();
    if (context.read<UserService>().user == null) setState(() => _initialRoute = '/auth');

    super.initState();
    
    _setApplicationTheme();
  }

  Future<void> _setApplicationTheme() async => context.read<DarkThemeService>().darkTheme = await context.read<DarkThemeService>().darkThemePreference.getTheme();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      initialRoute: _initialRoute,
      routes: routes,
      theme: ThemeData.light(useMaterial3: true).copyWith(
        primaryColor: const Color.fromARGB(255, 80, 55, 6)
      ),
      darkTheme: ThemeData.dark(useMaterial3: true).copyWith(
        primaryColor: const Color.fromARGB(255, 80, 55, 6)
      ),
      themeMode: context.watch<DarkThemeService>().darkTheme ? ThemeMode.dark : ThemeMode.light,
    );
  }
}