import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';

import 'package:tea_share/models/user_model.dart';

class UserTile extends StatefulWidget {
  final UserModel? user;

  const UserTile({
    super.key,
    required this.user
  });

  @override
  State<UserTile> createState() => _UserTileState();
}

class _UserTileState extends State<UserTile> {
  bool _errorOccurred = false;

  @override
  Widget build(BuildContext context) {
    return MaterialButton(
      onPressed: () => Navigator.pushNamed(
        context,
        '/other-profile',
        arguments: UserModel(
          username: widget.user!.username,
          image: widget.user!.image,
          email: widget.user!.email,
        )
      ),
      padding: EdgeInsets.zero,
      child: ListTile(
        title: Text(widget.user?.username ?? ""),
        leading: Visibility(
          visible: widget.user?.image != null,
          replacement: const Center(
            child: CircularProgressIndicator(),
          ),
          child: Visibility(
            visible: !_errorOccurred,
            replacement: const Icon(Icons.error,
              color: Colors.red,
            ),
            child: Hero(
              tag: widget.user!.email,
              child: CircleAvatar(
                backgroundImage: CachedNetworkImageProvider(
                  widget.user!.image,
                  errorListener: () => setState(() => _errorOccurred = true)
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}