import 'package:flutter/material.dart';
import 'package:skeletons/skeletons.dart';

class PostsGridSkeleton extends StatelessWidget {
  const PostsGridSkeleton({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        for (int i = 0; i < 8; i++)
          Row(
            children: <Widget>[
              SkeletonLine(
                style: SkeletonLineStyle(
                  height: 205.5,
                  width: MediaQuery.of(context).size.width / 2,
                  borderRadius: BorderRadius.circular(10),
                ),
              ),
              SkeletonLine(
                style: SkeletonLineStyle(
                  height: 205.5,
                  width: MediaQuery.of(context).size.width / 2,
                  borderRadius: BorderRadius.circular(10),
                ),
              ),
            ],
          ),
      ],
    );
  }
}