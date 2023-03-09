import 'package:provider/provider.dart';
import 'package:flutter/material.dart';

import 'package:tea_share/services/users_service.dart';
import 'package:tea_share/models/user_model.dart';
import 'package:tea_share/widgets/user_tile.dart';

class People extends StatefulWidget {
  const People({ super.key });

  @override
  State<People> createState() => _PeopleState();
}

int page = 1;

class _PeopleState extends State<People> {
  final List<UserTile> _users = [];

  final GlobalKey<AnimatedListState> _userListState = GlobalKey<AnimatedListState>();
  final ScrollController _userListController = ScrollController();

  bool _isLoadingUsers = true;

  @override
  void initState() {
    if (mounted) {
      _userListController.addListener(_userListListener);
      
      page = 1;

      WidgetsBinding.instance.addPostFrameCallback((_) => showUsers(page));
    }
    
    super.initState();
  }

  @override
  void dispose() {
    _userListController.dispose();

    super.dispose();
  }

  void _userListListener() {
    if (_userListController.position.pixels == _userListController.position.maxScrollExtent) {
      page++;
      showUsers(page);
    }
  }

  void showUsers(int page) {
    Future<void> delay = Future(() {});
    
    const int limit = 13;

    context.read<UserService>().fetchUsers(limit: limit, page: page).then((List<UserModel> users) {
      if (mounted) {
        setState(() {
          _isLoadingUsers = false;
          
          for (UserModel user in users) {
            delay = delay.then((_) => Future.delayed(const Duration(milliseconds: 50), () {
                _users.add(UserTile(user: user));
                _userListState.currentState?.insertItem(_users.length - 1);
              })
            );
          }
        });
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return _isLoadingUsers ? const Center(
      child: CircularProgressIndicator(),
    ) : AnimatedList(
      initialItemCount: _users.length,
      key: _userListState,
      controller: _userListController,
      itemBuilder: (BuildContext context, int index, Animation animation) {
        if (_isLoadingUsers) {
          return const Padding(
            padding: EdgeInsets.only(top: 10),
            child: Center(
              child: CircularProgressIndicator(),
            ),
          );
        } else {
          return SlideTransition(
            position: animation.drive(
              Tween(
                begin: const Offset(1, 0),
                end: const Offset(0, 0)
              )
            ),
            child: _users[index],
          );
        }
      },
    );
  }
}