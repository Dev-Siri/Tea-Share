import 'package:shared_preferences/shared_preferences.dart';
import 'package:flutter/material.dart';

class DarkThemePreference {
  static const String _themeLocalStoreKey = "theme";

  Future<void> setDarkTheme(bool value) async {
    final SharedPreferences prefs = await SharedPreferences.getInstance();
    await prefs.setBool(_themeLocalStoreKey, value);
  }

  Future<bool> getTheme() async {
    final SharedPreferences prefs = await SharedPreferences.getInstance();
    return prefs.getBool(_themeLocalStoreKey) ?? false;
  }
}

class DarkThemeService with ChangeNotifier {
  final DarkThemePreference darkThemePreference = DarkThemePreference();
  bool _darkTheme = false;

  bool get darkTheme => _darkTheme;

  set darkTheme(bool value) {
    _darkTheme = value;
    darkThemePreference.setDarkTheme(value);
    notifyListeners();
  }
}