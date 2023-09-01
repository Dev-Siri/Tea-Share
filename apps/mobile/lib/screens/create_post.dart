import "package:flutter/foundation.dart";
import "package:flutter/material.dart";
import "package:flutter_vector_icons/flutter_vector_icons.dart";
import "package:full_screen_image/full_screen_image.dart";
import "package:image_picker/image_picker.dart";
import "package:provider/provider.dart";
import "package:skeletons/skeletons.dart";
import "package:tea_share/models/user_model.dart";
import "package:tea_share/services/posts_service.dart";
import "package:tea_share/services/theme_service.dart";
import "package:tea_share/services/users_service.dart";
import "package:tea_share/widgets/top_bar.dart";

class Create extends StatefulWidget {
  const Create({ super.key });

  @override
  State<Create> createState() => _CreateState();
}

class _CreateState extends State<Create> {
  final TextEditingController _captionInputController = TextEditingController();

  XFile? _image;
  bool _isLoading = false;
  String _errorMessage = "";

  @override
  void dispose() {
    _captionInputController.dispose();

    super.dispose();
  }
  
  Future<void> _createPost() async {
    setState(() => _isLoading = true);

    final UserModel? user = await context.read<UserService>().user;

    if (user == null) return;

    final PostsServiceResponse response = await context.read<PostService>().createPost(
      caption: _captionInputController.text,
      userId: user.userId!,
      postImage: _image,
    );

    if (response.successful) {
      Navigator.pushNamed(context, "/");
      return;
    }

    setState(() {
      _errorMessage = response.errorMessage ?? "An error occured when trying to create your post.";
      _isLoading = false;
    });
  }

  Future<void> _pickImage() async {
    final ImagePicker imagePicker = ImagePicker();
    final XFile? image = await imagePicker.pickImage(source: ImageSource.gallery);

    if (image != null) setState(() => _image = image);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: context.watch<DarkThemeService>().darkTheme ? Colors.black : Colors.white,
      appBar: const TopBar(showBackButton: true),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            children: <Widget>[
              SizedBox(
                height: MediaQuery.of(context).size.height - (_image == null ? 190 : 350),
                child: TextFormField(
                  controller: _captionInputController,
                  keyboardType: TextInputType.multiline,
                  maxLines: null,
                  decoration: const InputDecoration(
                    labelStyle: TextStyle(fontSize: 20),
                    border: InputBorder.none,
                    labelText: "What's on your mind?",
                  ),
                ),
              ),
              if (_image != null)
                Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: <Widget>[
                    FullScreenWidget(
                      disposeLevel: DisposeLevel.High,
                      backgroundIsTransparent: true,
                      child: FutureBuilder(
                        future: _image!.readAsBytes(),
                        builder: (BuildContext context, AsyncSnapshot<Uint8List> snapshot) {
                          if (snapshot.connectionState == ConnectionState.waiting || snapshot.data == null) {
                            return SkeletonLine(
                              style: SkeletonLineStyle(
                                height: 150,
                                width: 150,
                                borderRadius: BorderRadius.circular(10)
                              ),
                            );
                          }
                  
                          return ClipRRect(
                            borderRadius: BorderRadius.circular(10),
                            child: Image.memory(snapshot.data!,
                              height: 150,
                              width: 150,
                              fit: BoxFit.cover,
                            ),
                          );
                        },
                      )
                    ),
                  ]
                ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                  IconButton(
                    onPressed: _pickImage,
                    icon: const Icon(Icons.image),
                  ),
                  Row(
                    children: <Widget>[
                      if (_errorMessage != "")
                        Padding(
                          padding: const EdgeInsets.only(right: 10),
                          child: Text(_errorMessage,
                            textAlign: TextAlign.center,
                            style: const TextStyle(color: Colors.red),
                          ),
                        ),
                      ElevatedButton(
                        style: ButtonStyle(
                          backgroundColor: MaterialStatePropertyAll(Theme.of(context).primaryColor),
                          foregroundColor: const MaterialStatePropertyAll(Colors.white),
                          shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                            RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(50),
                            ),
                          ),
                        ),
                        onPressed: _isLoading ? null : _createPost,
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: <Widget>[
                            const Icon(MaterialCommunityIcons.tea),
                            const Padding(
                              padding: EdgeInsets.only(left: 5),
                              child: Text("Brew it!",
                                style: TextStyle(fontWeight: FontWeight.bold)
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
                    ],
                  ),
                ]
              ),
            ],
          ),
        ),
      ),
    );
  }
}