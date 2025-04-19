import "package:flutter/material.dart";
import "package:skeletons/skeletons.dart";

class PostsSkeleton extends StatelessWidget {
  const PostsSkeleton({ super.key });

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: 10,
      addAutomaticKeepAlives: false,
      shrinkWrap: true,
      physics: const ClampingScrollPhysics(),
      padding: const EdgeInsets.only(
        left: 10,
        right: 10,
        bottom: 25,
      ),
      itemBuilder: (BuildContext context, int index) =>  Padding(
        padding: const EdgeInsets.only(bottom: 40),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Container(
              margin: const EdgeInsets.only(top: 10),
              child: Row(
                children: <Widget>[
                  Padding(
                    padding: const EdgeInsets.only(
                      left: 2,
                      right: 10
                    ),
                    child: SkeletonAvatar(
                      style: SkeletonAvatarStyle(
                        borderRadius: BorderRadius.circular(50),
                        height: 50,
                        width: 50
                      ),
                    ),
                  ),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      SkeletonLine(
                        style: SkeletonLineStyle(
                          borderRadius: BorderRadius.circular(50),
                          height: 15,
                          width: 100
                        ),
                      ),
                      SkeletonLine(
                        style: SkeletonLineStyle(
                          borderRadius: BorderRadius.circular(50),
                          padding: const EdgeInsets.only(top: 10),
                          height: 13,
                          width: 60
                        ),
                      )
                    ],
                  ),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 10),
              child: SkeletonLine(
                style: SkeletonLineStyle(
                  borderRadius: BorderRadius.circular(50),
                  height: 25,
                  width: 150
                ),
              ),
            ),
            SizedBox(
              height: 300,
              width: 500,
              child: ClipRRect(
                borderRadius: const BorderRadius.all(Radius.circular(10)),
                child: SkeletonLine(
                  style: SkeletonLineStyle(
                    height: 300,
                    borderRadius: BorderRadius.circular(10)
                  ),
                ),
              ),
            ),
            SkeletonParagraph(
              style: SkeletonParagraphStyle(
                lines: 2,
                lineStyle: SkeletonLineStyle(
                  borderRadius: BorderRadius.circular(10)
                ),
                padding: const EdgeInsets.only(
                  top: 15,
                ),
              )
            )
          ],
        ),
      ),
    );
  }
}
