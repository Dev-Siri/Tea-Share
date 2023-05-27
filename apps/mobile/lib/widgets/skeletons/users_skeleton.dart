import 'package:flutter/material.dart';
import 'package:skeletons/skeletons.dart';

class UsersSkeleton extends StatelessWidget {
  const UsersSkeleton({ super.key });

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: 10,
      itemBuilder: (BuildContext context, int index) {
        return SkeletonListTile(
          leadingStyle: SkeletonAvatarStyle(
            borderRadius: BorderRadius.circular(50)
          ),
          titleStyle: SkeletonLineStyle(
            borderRadius: BorderRadius.circular(50),
            padding: const EdgeInsets.only(left: 5)
          ),
          padding: const EdgeInsets.symmetric(
            horizontal: 20,
            vertical: 10
          ),
        );
      }
    );
  }
}