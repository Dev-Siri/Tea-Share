import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'package:firebase_core/firebase_core.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:tea_share/firebase_options.dart';
import 'package:tea_share/routes.dart';

import 'package:tea_share/services/authentication_service.dart';
import 'package:tea_share/services/posts_service.dart';
import 'package:tea_share/services/users_service.dart';
import 'package:tea_share/services/theme_service.dart' show DarkThemeService;

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
        Provider<AuthenticationService>(create: (_) => AuthenticationService(FirebaseAuth.instance)),
        Provider<PostService>(create: (_) => PostService()),
        Provider<UserService>(create: (_) => UserService()),
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
    if (context.read<AuthenticationService>().user == null) setState(() => _initialRoute = '/auth');

    super.initState();
    
    _setApplicationTheme();
  }

  Future<void> _setApplicationTheme() async => context.read<DarkThemeService>().darkTheme = await context.read<DarkThemeService>().darkThemePreference.getTheme();
  
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      initialRoute: _initialRoute,
      routes: routes,
      theme: ThemeData.light(),
      darkTheme: ThemeData.dark(),
      themeMode: context.watch<DarkThemeService>().darkTheme ? ThemeMode.dark : ThemeMode.light,
    );
  }
}