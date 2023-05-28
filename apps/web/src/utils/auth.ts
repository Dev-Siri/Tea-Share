export const GoogleAuth = async () => {
  const { signInWithPopup, GoogleAuthProvider } = await import("firebase/auth");
  const { default: queryClient } = await import("@/services/queryClient");
  const { auth } = await import("@/services/firebase");
  const { toast } = await import("react-hot-toast");
  const { setCookie } = await import("./cookies");

  const loading = toast.loading("Logging you in...");

  try {
    const provider = new GoogleAuthProvider();

    const { user } = await signInWithPopup(auth, provider);

    await queryClient("/users", {
      method: "POST",
      body: {
        email: user.email!,
        username: user.displayName!,
        image: user.photoURL!,
      },
    });

    const authToken = await user.getIdToken();

    setCookie("auth_token", authToken);
  } catch (error: any) {
    const { googleAuthErrorFormater } = await import("./errors");
    const errorMessage = googleAuthErrorFormater(error.message);

    toast.remove(loading);
    toast.error(`Could not sign in with Google, ${errorMessage}`);
  }
};

export const Logout = async () => {
  const { removeCookie } = await import("./cookies");
  const { toast } = await import("react-hot-toast");
  const { auth } = await import("@/services/firebase");

  const loading = toast.loading("Logging you out...");

  try {
    await auth.signOut();
    removeCookie("auth_token");
  } catch (error: any) {
    toast.remove(loading);
    toast.error(`Failed to log you out, ${error.message}`);
  }
};

export const UpdateProfile = async (email: string, username: string, image: File | string | null, id: string) => {
  const { getDownloadURL, ref, uploadBytes } = await import("firebase/storage");
  const { default: queryClient } = await import("@/services/queryClient");
  const { updateEmail, updateProfile } = await import("firebase/auth");
  const { storage, auth } = await import("@/services/firebase");
  const { toast } = await import("react-hot-toast");
  const { setCookie } = await import("./cookies");

  try {
    const imageName = crypto.randomUUID();
    const imageRef = ref(storage, `users/${imageName}`);

    await uploadBytes(imageRef, image as File);

    const uploadedImage = await getDownloadURL(imageRef);

    toast.loading("Updating your profile...", { id: "update-profile" });

    await updateProfile(auth.currentUser!, {
      displayName: username,
      photoURL: uploadedImage,
    });

    await updateEmail(auth.currentUser!, email);

    await queryClient(`/users?id=${id}`, {
      method: "PUT",
      body: {
        _id: id,
        image: uploadedImage,
        username,
        email,
      },
    });

    const authToken = await auth.currentUser!.getIdToken();

    setCookie("auth_token", authToken);

    toast.remove("update-profile");
    toast.success("Successfully updated your profile.");
    location.reload();
  } catch (error: any) {
    toast.remove();
    toast.error(`Failed to update your profile, ${error.message}`);
  }
};
