import 'package:flutter/material.dart';
import 'package:date_time_format/date_time_format.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:provider/provider.dart';
import 'package:tea_share/models/post_model.dart';

import 'package:tea_share/services/authentication_service.dart';
import 'package:tea_share/services/posts_service.dart';
import 'package:tea_share/services/theme_service.dart';

class PostCard extends StatefulWidget {
  final String id;
  final String title;
  final String description;
  final String author;
  final String authorImage;
  final String image;
  final String createdAt;
  final List people;
  final List peopleImage;

  const PostCard({
    super.key,
    required this.id,
    required this.title,
    required this.description,
    required this.author,
    required this.authorImage,
    required this.image,
    required this.createdAt,
    required this.people,
    required this.peopleImage,
  });

  @override
  State<PostCard> createState() => _PostCardState();
}

class _PostCardState extends State<PostCard> {
  late String _likeText;
  late IconData _thumbsUpIcon;
  late bool _isLikeButtonDisabled;

  String _postLikes(User? user) {
    if (widget.people.isEmpty) return '0 Likes';

    if (widget.people.contains(user?.displayName)) {
      if (widget.people.length == 1 && widget.people.contains(user?.displayName)) return 'You liked this post';

      return 'You and ${widget.people.length - 1} ${widget.people.length - 1 == 1 ? 'other' : 'others'}';
    }

    if (widget.people.length - 1 == 0) return '${widget.people[0]} liked this post';

    return '${widget.people[0]} and ${widget.people.length - 1} others';
  }

  @override
  void initState() {
    final User? user = context.read<AuthenticationService>().user;
    
    setState(() {
      _likeText = _postLikes(user);
      _isLikeButtonDisabled = widget.people.contains(user?.displayName);

      if (widget.people.contains(user?.displayName)) {
        _thumbsUpIcon = Icons.thumb_up_sharp;
      } else {
        _thumbsUpIcon = Icons.thumb_up_outlined;
      }
    });
    super.initState();
  }

  Future<void> _likePost() async {
    final User? user = context.read<AuthenticationService>().user;
    
    await context.read<PostService>().likePost(
      id: widget.id,
      username: user!.displayName! ,
      image: user.photoURL!,
    );

    widget.people.add(user.displayName);
    widget.peopleImage.add(user.photoURL);

    setState(() {
      _isLikeButtonDisabled = true;
      _thumbsUpIcon = Icons.thumb_up_sharp;
      _likeText = _postLikes(user);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 5,
      margin: const EdgeInsets.only(top: 15),
      child: Container(
        width: 500,
        decoration: const BoxDecoration(
          borderRadius: BorderRadius.all(Radius.circular(2)),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            MaterialButton(
              padding: EdgeInsets.zero,
              onPressed: () => Navigator.pushNamed(
                context,
                '/post-info',
                arguments: Post(
                  title: widget.title,
                  image: widget.image,
                  description: widget.description,
                  author: widget.author,
                  authorImage: widget.authorImage,
                  people: widget.people,
                  peopleImage: widget.peopleImage,
                  createdAt: widget.createdAt,
                  id: widget.id,
                )
              ),
              child: SizedBox(
                width: 500,
                child: ClipRRect(
                  borderRadius: const BorderRadius.all(Radius.circular(10)),
                  child: Hero(
                    tag: widget.title,
                    child: CachedNetworkImage(
                      imageUrl: widget.image,
                      progressIndicatorBuilder: (BuildContext context, String url, DownloadProgress progress) => const CircularProgressIndicator(),
                      height: 300,
                      fit: BoxFit.fill
                    ),
                  ),
                )
              ),
            ),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Padding(
                  padding: const EdgeInsets.only(
                    top: 15,
                    left: 15,
                  ),
                  child: Text(widget.title,
                    style: const TextStyle(
                      fontWeight: FontWeight.bold,
                      fontSize: 25,
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(
                    top: 10,
                    left: 17,
                  ),
                  child: Text(widget.description,
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                    style: TextStyle(
                      color: context.read<DarkThemeService>().darkTheme ?
                        Colors.grey.shade400 : Colors.grey.shade600
                    ),
                  )
                ),
                Padding(
                  padding: const EdgeInsets.only(
                    top: 10,
                    left: 19
                  ),
                  child: Text(DateTimeFormat.relative(DateTime.parse(widget.createdAt)),
                    style: TextStyle(
                      color: context.read<DarkThemeService>().darkTheme ?
                        Colors.grey.shade400 : Colors.grey.shade600
                    ),
                  )
                ),
                Container(
                  margin: const EdgeInsets.only(top: 10),
                  child: Row(
                    children: <Widget>[
                      MaterialButton(
                        onPressed: _isLikeButtonDisabled ? null : _likePost,
                        disabledTextColor: context.read<DarkThemeService>().darkTheme ? Colors.white : Colors.black,
                        child: SizedBox(
                          height: 48,
                          child: Row(
                            crossAxisAlignment: CrossAxisAlignment.center,
                            mainAxisAlignment: MainAxisAlignment.start,
                            children: <Widget>[
                              Icon(_thumbsUpIcon,
                                color: Colors.blue,
                                size: 22
                              ),
                              Padding(
                                padding: const EdgeInsets.only(left: 5),
                                child: SizedBox(
                                  width: 135,
                                  child: Text(
                                    _likeText,
                                    overflow: TextOverflow.ellipsis
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.only(
                          left: 52,
                          right: 5
                        ),
                        child: SizedBox(
                          width: 50,
                          child: Text(
                            widget.author,
                            overflow: TextOverflow.ellipsis
                          ),
                        ),
                      ),
                      CircleAvatar(
                        backgroundImage: CachedNetworkImageProvider(widget.authorImage),
                        radius: 15,
                      )
                    ],
                  ),
                )
              ],
            )
          ],
        ),
      ),
    );
  }
}
