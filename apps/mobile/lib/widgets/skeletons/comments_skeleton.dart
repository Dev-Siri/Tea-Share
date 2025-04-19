import 'package:flutter/material.dart';
import 'package:skeletons/skeletons.dart';

class CommentsSkeleton extends StatelessWidget {
  const CommentsSkeleton({ super.key });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        for (int i = 0; i < 12; i++)
          ListTile(
            leading: SkeletonAvatar(
              style: SkeletonAvatarStyle(
                borderRadius: BorderRadius.circular(50)
              ),
            ),
            title: SkeletonLine(
              style: SkeletonLineStyle(
                borderRadius: BorderRadius.circular(50)
              ),
            ),
          )
      ],
    );
  }
}