import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';

import 'package:tea_share/models/user_model.dart';

class UserTile extends StatelessWidget {
  final User user;
  
  const UserTile({
    super.key,
    required this.user
  });

  @override
  Widget build(BuildContext context) {
    return MaterialButton(
      onPressed: () => Navigator.pushNamed(
        context,
        '/other-profile',
        arguments: User(
          username: user.username,
          image: user.image,
          email: user.email,
          id: ""
        )
      ),
      padding: EdgeInsets.zero,
      child: ListTile(
        title: Text(user.username),
        leading: Hero(
          tag: user.email,
          child: CircleAvatar(
            backgroundImage: CachedNetworkImageProvider(user.image),
          ),
        ),
      ),
    );
  }
}