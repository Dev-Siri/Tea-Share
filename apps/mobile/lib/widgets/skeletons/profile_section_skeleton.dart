import "package:flutter/material.dart";
import "package:skeletons/skeletons.dart";

class ProfileSectionSkeleton extends StatelessWidget {
  const ProfileSectionSkeleton({ super.key });

  @override
  Widget build(BuildContext context) {
    return const Row(
      mainAxisAlignment: MainAxisAlignment.start,
      children: <Widget>[
        SkeletonAvatar(
          style: SkeletonAvatarStyle(
            height: 100,
            width: 100,
            shape: BoxShape.circle
          ),
        ),
        Padding(
          padding: EdgeInsets.only(left: 10),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              SkeletonLine(
                style: SkeletonLineStyle(
                  height: 20,
                  width: 140,
                  borderRadius: BorderRadius.all(Radius.circular(10))
                ),
              ),
              SkeletonLine(
                style: SkeletonLineStyle(
                  padding: EdgeInsets.only(top: 10),
                  height: 20,
                  width: 60,
                  borderRadius: BorderRadius.all(Radius.circular(10))
                ),
              ),
            ],
          ),
        )
      ],
    );
  }
}