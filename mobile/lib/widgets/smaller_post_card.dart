import 'package:cached_network_image/cached_network_image.dart';
import 'package:provider/provider.dart';
import 'package:flutter/material.dart';

import 'package:tea_share/models/post_model.dart';
import 'package:tea_share/services/theme_service.dart';

class SmallerPostCard extends StatelessWidget {
  final Post post;

  const SmallerPostCard({
    super.key,
    required this.post
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(20),
      child: Container(
        decoration: BoxDecoration(
          color: context.read<DarkThemeService>().darkTheme ?
            Colors.grey.shade900 : Colors.grey.shade300,
          borderRadius: BorderRadius.circular(20)
        ),
        child: MaterialButton(
          height: 300,
          minWidth: 300,
          padding: EdgeInsets.zero,
          onPressed: () => Navigator.pushNamed(
            context,
            '/post-info',
            arguments: Post(
              image: post.image,
              title: post.title,
              description: post.description,
              author: post.author,
              authorImage: post.authorImage,
              people: post.people,
              peopleImage: post.peopleImage,
              createdAt: post.createdAt,
              id: post.id
            )
          ),
          child: Column(
            children: <Widget>[
              SizedBox(
                height: 300,
                width: 300,
                child: Hero(
                  tag: post.title,
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(10),
                    child: CachedNetworkImage(
                      imageUrl: post.image,
                      progressIndicatorBuilder: (BuildContext context, String url, DownloadProgress progress) => const CircularProgressIndicator(),
                      fit: BoxFit.fill,
                    ),
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(top: 10),
                child: SizedBox(
                  width: 270,
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: <Widget>[
                      SizedBox(
                        width: 200,
                        child: Text(
                          post.title,
                          style: const TextStyle(
                            fontSize: 20,
                            overflow: TextOverflow.ellipsis
                          ),
                        ),
                      ),
                      Row(
                        children: <Widget>[
                          const Icon(Icons.thumb_up,
                            color: Colors.blue
                          ),
                          Padding(
                            padding: const EdgeInsets.only(left: 4),
                            child: Text(
                              post.people.length.toString(),
                              style: const TextStyle(
                                color: Colors.blue,
                                fontSize: 20,
                              ),
                            ),
                          )
                        ],
                      ),
                    ],
                  ),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
