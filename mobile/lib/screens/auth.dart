import 'package:provider/provider.dart';
import 'package:flutter/material.dart';
import 'package:tea_share/services/authentication_service.dart';

import 'package:tea_share/services/theme_service.dart' show DarkThemeService;

class Auth extends StatefulWidget {
  const Auth({ super.key });

  @override
  State<Auth> createState() => _AuthState();
}

class _AuthState extends State<Auth> {
  final TextEditingController _usernameController = TextEditingController();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();
  
  bool _isSignup = false;
  bool _isLoading = false;

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();

    super.dispose();
  }

  void _showErrorDialog(String? errorMessage) => showDialog(
    context: context,
    builder: (_) => AlertDialog(
      elevation: 5,
      title: const Text('Error'),
      content: Text(errorMessage ?? 'Error, could not log you in.'),
      actions: <Widget>[
        TextButton(
          onPressed: () => Navigator.pop(context),
          child: const Text('Ok'),
        ),
      ],
    )
  );

  Future<void> _signInWithMail() async {
    setState(() => _isLoading = true);
    
    if (_isSignup) {
      final String? response = await context.read<AuthenticationService>().signUp(
        username: _usernameController.text,
        email: _emailController.text,
        password: _passwordController.text,
      );
      
      if (response == 'Signed up') {
        Navigator.pushReplacementNamed(context, '/');
        return;
      }

      setState(() => _isLoading = false);
      _showErrorDialog(response);
    } else {
      final String? response = await context.read<AuthenticationService>().login(
        email: _emailController.text,
        password: _passwordController.text,
      );
      
      if (response == 'Logged in') {
        Navigator.pushReplacementNamed(context, '/');
        return;
      }
      
      setState(() => _isLoading = false);
      _showErrorDialog(response);
    }
  }

  Future<void> _signInWithGoogle() async {
    final String? response = await context.read<AuthenticationService>().signInWithGoogle();
    
    if (response == 'Signed in with Google') {
      Navigator.pushReplacementNamed(context, '/');
      return;
    }
    
    _showErrorDialog(response);
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        body: SingleChildScrollView(
          child: Padding(
            padding: const EdgeInsets.only(left: 5, top: 100),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                Image.asset(
                    context.read<DarkThemeService>().darkTheme ? 'assets/LogoWhite.gif' : 'assets/LogoPurple.gif',
                    height: 130,
                ),
                Padding(
                  padding: const EdgeInsets.only(left: 25, top: 10),
                  child: Text(_isSignup ? 'Sign up' : 'Login',
                      style: const TextStyle(
                      fontSize: 33
                    ),
                  ),
                ),
                Center(
                  child: FractionallySizedBox(
                    widthFactor: 0.86,
                    child: Padding(
                      padding: const EdgeInsets.only(top: 25),
                      child: Column(
                        children: <Widget>[
                          if (_isSignup) TextFormField(
                            autocorrect: false,
                            controller: _usernameController,
                            keyboardType: TextInputType.name,
                            decoration: const InputDecoration(
                              labelText: 'Username',
                              border: OutlineInputBorder(),
                            ),
                          ),
                          Padding(
                            padding: EdgeInsets.only(
                              top: _isSignup ? 10 : 0
                            ),
                            child: TextFormField(
                              autocorrect: false,
                              controller: _emailController,
                              keyboardType: TextInputType.emailAddress,
                              decoration: const InputDecoration(
                                labelText: 'Email',
                                border: OutlineInputBorder()
                              ),
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.only(
                              top: 10
                            ),
                            child: TextFormField(
                              autocorrect: false,
                              enableSuggestions: false,
                              obscureText: true,
                              controller: _passwordController,
                              decoration: const InputDecoration(
                                labelText: 'Password',
                                border: OutlineInputBorder()
                              ),
                            ),
                          ),
                        ],
                      )
                    ),
                  ),
                ),
                Center(
                  child: FractionallySizedBox(
                    widthFactor: 0.86,
                    child: Column(
                      children: <Widget>[
                        Padding(
                          padding: const EdgeInsets.only(top: 20),
                          child: SizedBox(
                            height: 45,
                            child: ElevatedButton(
                              onPressed: _signInWithMail,
                              style: const ButtonStyle(
                                elevation: MaterialStatePropertyAll(10)
                              ),
                              child: Row(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: <Widget>[
                                  Padding(
                                    padding: EdgeInsets.only(
                                      left: _isLoading ? 16 : 0
                                    ),
                                    child: Text(_isSignup ? 'Signup' : 'Login',
                                      style: const TextStyle(
                                        fontWeight: FontWeight.bold,
                                      )
                                    ),
                                  ),
                                  if (_isLoading) Container(
                                    height: 20,
                                    width: 30,
                                    padding: const EdgeInsets.only(left: 10),
                                    child: const CircularProgressIndicator(
                                      color: Colors.white,
                                      strokeWidth: 3,
                                    ),
                                  )
                                ],
                              )
                            ),
                          ),
                        ),
                        Padding(
                          padding: const EdgeInsets.only(top: 10),
                          child: SizedBox(
                            height: 45,
                            child: ElevatedButton(
                              onPressed: _signInWithGoogle,
                              style: ButtonStyle(
                                backgroundColor: MaterialStatePropertyAll(Colors.grey.shade900),
                                elevation: const MaterialStatePropertyAll(10)
                              ),
                              child: Row(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: <Widget>[
                                  Padding(
                                    padding: const EdgeInsets.all(10),
                                    child: Image.asset('assets/GoogleIcon.png'),
                                  ),
                                  const Padding(
                                    padding: EdgeInsets.only(right: 12),
                                    child: Text('Sign in with Google',
                                      style: TextStyle(
                                        color: Colors.white,
                                        fontWeight: FontWeight.bold
                                      ),
                                    ),
                                  )
                                ],
                              ),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.only(top: 20, bottom: 20),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      Text(_isSignup ? 'Already have an account? ' : 'Don\'t have an account? ',
                        style: const TextStyle(
                          color: Colors.grey
                        ),
                      ),
                      TextButton(
                        onPressed: () => setState(() {
                          _isSignup = !_isSignup;
                          _isLoading = false;
                        }),
                        style: TextButton.styleFrom(
                          padding: EdgeInsets.zero,
                          minimumSize: const Size(3, 3),
                          tapTargetSize: MaterialTapTargetSize.shrinkWrap
                        ),
                        child: Text(_isSignup ? 'Login.' : 'Signup.',
                          style: const TextStyle(
                            color: Colors.blue
                          ),
                        ),
                      ),
                    ],
                  ),
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}