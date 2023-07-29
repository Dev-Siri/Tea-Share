import "package:cached_network_image/cached_network_image.dart";
import "package:flutter/material.dart";
import "package:tea_share/models/user_model.dart";

class UserTile extends StatefulWidget {
  final String username;
  final String userImage;

  const UserTile({
    super.key,
    required this.username,
    required this.userImage,
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
        "/other-profile",
        arguments: UserModel(
          username: widget.username,
          userImage: widget.userImage,
          email: "",
        ),
      ),
      padding: EdgeInsets.zero,
      child: ListTile(
        title: Text(widget.username),
        leading: _errorOccurred ? const Icon(
          Icons.error,
          color: Colors.red,
        ) : Hero(
          tag: widget.userImage,
          child: CircleAvatar(
            backgroundImage: CachedNetworkImageProvider(
              widget.userImage,
              errorListener: () => setState(() => _errorOccurred = true),
            ),
          ),
        ),
      ),
    );
  }
}
