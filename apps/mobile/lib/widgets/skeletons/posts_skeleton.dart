import 'package:flutter/material.dart';
import 'package:skeletons/skeletons.dart';

class PostsSkeleton extends StatelessWidget {
  const PostsSkeleton({ super.key });

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: 10,
      addAutomaticKeepAlives: true,
      padding: const EdgeInsets.only(
        left: 25,
        right: 25,
        bottom: 25,
      ),
      itemBuilder: (BuildContext context, int index) => Card(
        elevation: 5,
        margin: const EdgeInsets.only(top: 15),
        child: Container(
          width: 500,
          decoration: const BoxDecoration(
            borderRadius: BorderRadius.all(Radius.circular(2)),
          ),
          child: SkeletonItem(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                SkeletonLine(
                  style: SkeletonLineStyle(
                    height: 30,
                    width: 200,
                    borderRadius: BorderRadius.circular(5),
                    padding: const EdgeInsets.only(
                      top: 15,
                      left: 15,
                    ),
                  ),
                ),
                SkeletonLine(
                  style: SkeletonLineStyle(
                    height: 10,
                    width: 100,
                    borderRadius: BorderRadius.circular(5),
                    padding: const EdgeInsets.only(
                      top: 5,
                      left: 15,
                    ),
                  ),
                ),
                SkeletonLine(
                  style: SkeletonLineStyle(
                    height: 300,
                    borderRadius: BorderRadius.circular(10),
                    padding: const EdgeInsets.only(
                      top: 10,
                      bottom: 10,
                    ),
                  ),
                ),
                SkeletonParagraph(
                  style: SkeletonParagraphStyle(
                    lines: 2,
                    lineStyle: SkeletonLineStyle(
                      borderRadius: BorderRadius.circular(50),
                      height: 10
                    ),
                    padding: const EdgeInsets.only(
                      top: 10,
                      left: 17,
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(
                    top: 10,
                    bottom: 10,
                  ),
                  child: Row(
                    children: <Widget>[
                      const Spacer(),
                      Padding(
                        padding: const EdgeInsets.only(right: 5),
                        child: SkeletonLine(
                          style: SkeletonLineStyle(
                            width: 100,
                            borderRadius: BorderRadius.circular(50)
                          ),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.only(right: 10),
                        child: SkeletonAvatar(
                          style: SkeletonAvatarStyle(
                            borderRadius: BorderRadius.circular(50),
                            height: 40,
                            width: 40
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
