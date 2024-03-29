import "package:flutter/material.dart";
import "package:provider/provider.dart";
import "package:tea_share/services/theme_service.dart";
import "package:tea_share/services/users_service.dart";
import "package:tea_share/utils/validation.dart";

class Auth extends StatefulWidget {
  const Auth({ super.key });

  @override
  State<Auth> createState() => _AuthState();
}

class _AuthState extends State<Auth> with Validation {
  final TextEditingController _usernameController = TextEditingController();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();

  bool _isSignup = false;
  bool _isLoading = false;
  String _emailInvalidMessage = "";
  String _errorMessage = "";

  @override
  void dispose() {
    _usernameController.dispose();
    _emailController.dispose();
    _passwordController.dispose();

    super.dispose();
  }

  Future<void> _signInWithMail() async {
    setState(() => _isLoading = true);

    final String email = _emailController.text.trim();
    final String password = _passwordController.text.trim();

    if (_isSignup) {
      final UsersServiceResponse response = await context.read<UserService>().signup(
        username: _usernameController.text,
        email: email,
        password: password,
      );

      if (response.successful) {
        Navigator.pushReplacementNamed(context, "/");
        return;
      }

      _errorMessage = response.errorMessage ?? "An error occured while trying to create your account.";
    } else {
      final UsersServiceResponse response = await context.read<UserService>().login(
        email: email,
        password: password,
      );

      if (response.successful) {
        Navigator.pushReplacementNamed(context, "/");
        return;
      }

      _errorMessage = response.errorMessage ?? "An error occured while trying to log you in.";
    }

    setState(() => _isLoading = false);
  }

  Future<void> _signInWithGoogle() async {
    final UsersServiceResponse response = await context.read<UserService>().signInWithGoogle();

    if (response.successful) {
      Navigator.pushReplacementNamed(context, "/");
      return;
    }

    setState(() => _errorMessage = response.errorMessage ?? "Error, could not log you in.");
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: context.watch<DarkThemeService>().darkTheme ? Colors.black : Colors.white,
        body: SingleChildScrollView(
          child: Center(
            child: FractionallySizedBox(
              widthFactor: 0.86,
              child: Padding(
                padding: const EdgeInsets.only(top: 80),
                child: Column(
                  children: <Widget>[
                    Container(
                      decoration: BoxDecoration(
                        color: Theme.of(context).primaryColor,
                        borderRadius: BorderRadius.circular(500)
                      ),
                      padding: const EdgeInsets.all(25),
                      child: Image.asset("assets/Logo.gif",
                        height: 130,
                      ),
                    ),
                    const Padding(
                      padding: EdgeInsets.only(top: 10),
                      child: Text("Tea Share",
                          style: TextStyle(
                          fontSize: 44
                        ),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.only(top: 10),
                      child: Column(
                        children: <Widget>[
                          if (_isSignup)
                            TextFormField(
                              autocorrect: false,
                              controller: _usernameController,
                              keyboardType: TextInputType.name,
                              decoration: InputDecoration(
                                labelText: "Username",
                                border: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(10)
                                ),
                              ),
                            ),
                          Padding(
                            padding: EdgeInsets.only(top: _isSignup ? 10 : 0),
                            child: TextFormField(
                              autocorrect: false,
                              controller: _emailController,
                              keyboardType: TextInputType.emailAddress,
                              onChanged: (String value) => setState(() {
                                if (value.isNotEmpty && !isValidEmail(value)) {
                                  _emailInvalidMessage = "Email is invalid.";
                                  return;
                                }

                                if (value.length > 255) {
                                  _emailInvalidMessage = "Email too long.";
                                  return;
                                }

                                _emailInvalidMessage = "";
                              }),
                              decoration: InputDecoration(
                                labelText: "Email",
                                errorText: _emailInvalidMessage != "" ? _emailInvalidMessage : null,
                                border: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(10)
                                ),
                              ),
                            ),
                          ),
                          Padding(
                            padding: const EdgeInsets.symmetric(vertical: 10),
                            child: TextFormField(
                              autocorrect: false,
                              enableSuggestions: false,
                              obscureText: true,
                              controller: _passwordController,
                              decoration: InputDecoration(
                                labelText: "Password",
                                border: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(10)
                                ),
                              ),
                            ),
                          ),
                        ],
                      )
                    ),
                    if (_errorMessage != "")
                      Padding(
                        padding: const EdgeInsets.only(bottom: 10),
                        child: Text(_errorMessage,
                          style: const TextStyle(
                            color: Colors.red
                          ),
                        ),
                      ),
                    SizedBox(
                      height: 45,
                      child: ElevatedButton(
                        onPressed: _isLoading ? null : _signInWithMail,
                        style: ButtonStyle(
                          backgroundColor: MaterialStatePropertyAll(Theme.of(context).primaryColor),
                          foregroundColor: const MaterialStatePropertyAll(Colors.white),
                          shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                            RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(10),
                            ),
                          ),
                        ),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: <Widget>[
                            Padding(
                              padding: EdgeInsets.only(
                                left: _isLoading ? 16 : 0
                              ),
                              child: Text(_isSignup ? "Signup" : "Login",
                                style: const TextStyle(
                                  fontWeight: FontWeight.bold,
                                )
                              ),
                            ),
                            if (_isLoading)
                              Container(
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
                    Padding(
                      padding: const EdgeInsets.only(top: 10),
                      child: SizedBox(
                        height: 45,
                        child: ElevatedButton(
                          onPressed: _isLoading ? null : _signInWithGoogle,
                          style: ButtonStyle(
                            backgroundColor: MaterialStatePropertyAll(Colors.grey.shade900),
                            shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                              RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(10),
                              ),
                            ),
                          ),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: <Widget>[
                              Padding(
                                padding: const EdgeInsets.all(10),
                                child: Image.asset("assets/GoogleIcon.png"),
                              ),
                              const Padding(
                                padding: EdgeInsets.only(right: 12),
                                child: Text("Sign in with Google",
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
                    Padding(
                      padding: const EdgeInsets.only(top: 20, bottom: 20),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: <Widget>[
                          Text(_isSignup ? "Already have an account? " : "Don't have an account? ",
                            style: const TextStyle(
                              fontSize: 18
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
                            child: Text(_isSignup ? "Login." : "Signup.",
                              style: TextStyle(
                                fontWeight: FontWeight.bold,
                                color: Theme.of(context).primaryColor,
                                fontSize: 18
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
        ),
      ),
    );
  }
}