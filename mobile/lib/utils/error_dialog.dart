import 'package:flutter/material.dart';

mixin ErrorDialog {
  void showErrorDialog(BuildContext context, String errorMessage) => showDialog(
    context: context,
    builder: (_) => AlertDialog(
      elevation: 5,
      title: const Text('Error'),
      content: Text(errorMessage),
      actions: <Widget>[
        TextButton(
          onPressed: () => Navigator.pop(context),
          child: const Text('Ok'),
        ),
      ],
    )
  );
}