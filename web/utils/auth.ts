import { type User } from "firebase/auth";

import type { MailAuthHandler, GoogleAuthHandler, LogoutHandler, UpdateProfileHandler } from "../types";

export const MailAuth: MailAuthHandler = async (displayName, email, password, photoURL, router, isSignup) => {
  const { toast } = await import("react-hot-toast");
  const { createUser, storage, auth } = await import("../api");

  toast.loading(isSignup ? "Creating your account..." : "Logging you in...", { id: "loading" });

  if (isSignup) {
    const { createUserWithEmailAndPassword, updateProfile } = await import("firebase/auth");
    const { getDownloadURL, ref, uploadBytes } = await import("firebase/storage");

    try {
      const characters: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890" as const;
      let imageName: string = "";

      for (let i = 0; i < characters.length; i++) {
        imageName += characters.charAt(Math.floor(Math.random() * characters.length));
      }

      const imageRef = ref(storage, `users/${imageName}`);

      await uploadBytes(imageRef, photoURL as File);

      const imageLink: string = await getDownloadURL(imageRef);

      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser as User, {
        displayName,
        photoURL: imageLink,
      });
      await createUser({
        username: displayName,
        image: imageLink,
        email,
      });

      localStorage.setItem("user", JSON.stringify(auth.currentUser));
      router.replace("/");
    } catch (error: any) {
      const { default: Errors } = await import("./errors");
      const errorMessage = Errors.mailAuth(error.message);

      toast.remove("loading");
      toast.error(`Failed to create your account, ${errorMessage}`);
    }
  } else {
    const { signInWithEmailAndPassword } = await import("firebase/auth");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("user", JSON.stringify(auth.currentUser));
      router.replace("/");
    } catch (error: any) {
      const { default: Errors } = await import("./errors");
      const errorMessage = Errors.mailAuth(error.message);

      toast.remove("loading");
      toast.error(`Failed to login, ${errorMessage}`);
    }
  }
};

export const GoogleAuth: GoogleAuthHandler = async router => {
  const { signInWithPopup, GoogleAuthProvider } = await import("firebase/auth");
  const { toast } = await import("react-hot-toast");
  const { createUser, auth } = await import("../api");

  try {
    const provider = new GoogleAuthProvider();

    await signInWithPopup(auth, provider);

    if (!auth.currentUser) return;

    await createUser({
      email: auth.currentUser?.email as string,
      username: auth.currentUser?.displayName as string,
      image: auth.currentUser?.photoURL as string,
    });

    localStorage.setItem("user", JSON.stringify(auth.currentUser));
    router.replace("/");
  } catch (error: any) {
    const { default: Errors } = await import("./errors");
    const errorMessage = Errors.googleAuth(error.message);
    toast.error(`Could not sign in with Google, ${errorMessage}`);
  }
};

export const Logout: LogoutHandler = async router => {
  const { toast } = await import("react-hot-toast");
  const { auth } = await import("../api");

  try {
    await auth.signOut();
    localStorage.removeItem("user");
    router.replace("/");
  } catch (error: any) {
    toast.error(`Failed to log you out, ${error.message}`);
  }
};

export const UpdateProfile: UpdateProfileHandler = async (email, username, image, id) => {
  const { updateEmail, updateProfile } = await import("firebase/auth");
  const { getDownloadURL, ref, uploadBytes } = await import("firebase/storage");
  const { updateProfile: updateProfileAPI, storage, auth } = await import("../api");
  const { toast } = await import("react-hot-toast");

  try {
    const characters: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890" as const;
    let imgName: string = "";

    for (let i = 0; i < characters.length; i++) {
      imgName += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    const imageRef = ref(storage, `users/${imgName}.jpg`);

    await uploadBytes(imageRef, new Blob([image as File]));

    const uploadedImage = await getDownloadURL(imageRef);

    toast.loading("Updating your profile...", { id: "update-profile" });
    await updateProfile(auth.currentUser as User, {
      displayName: username,
      photoURL: uploadedImage,
    });

    await updateEmail(auth.currentUser as User, email);

    await updateProfileAPI(id, { _id: id, image: uploadedImage, username, email });

    localStorage.setItem("user", JSON.stringify(auth.currentUser));
    toast.remove("update-profile");
    toast.success("Successfully updated your profile.");
    location.reload();
  } catch (error: any) {
    toast.error(`Failed to update your profile, ${error.message}`);
  }
};
