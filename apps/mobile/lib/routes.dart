import "package:flutter/material.dart";
import "package:tea_share/main_screens.dart";
import "package:tea_share/screens/auth.dart";
import "package:tea_share/screens/create_post.dart";
import "package:tea_share/screens/edit_profile.dart";
import "package:tea_share/screens/other_profile.dart";
import "package:tea_share/screens/post_info.dart";
import "package:tea_share/screens/post_likes.dart";
import "package:tea_share/screens/profile.dart";

final Map<String, WidgetBuilder> routes = {
  "/": (_) => const MainScreens(),
  "/auth": (_) => const Auth(),
  "/create-post": (_) => const Create(),
  "/edit-profile": (_) => const EditProfile(),
  "/post-info": (_) => PostInfo(),
  "/post-info/likes": (_) => const PostLikes(),
  "/profile": (_) => const Profile(),
  "/other-profile": (_) => const OtherProfile(),
};