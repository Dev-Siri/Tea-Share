import "package:flutter/material.dart";

class ErrorMessage extends StatelessWidget {
  final IconData icon;
  final String message;
  
  const ErrorMessage({
    super.key,
    required this.icon,
    required this.message
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: <Widget>[
        Center(
          child: Icon(icon,
            color: Colors.red,
          ),
        ),
        Padding(
          padding: const EdgeInsets.only(top: 8.0),
          child: Text(message,
          textAlign: TextAlign.center,
            style: const TextStyle(
              color: Colors.red,
            ),
          ),
        ),
      ],
    );
  }
}