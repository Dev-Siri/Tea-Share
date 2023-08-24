mixin Formatting {
  String formatHandle(String username) => "@${username.toLowerCase().replaceAll(RegExp(r' '), '-')}";
}