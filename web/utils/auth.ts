import { type User } from "firebase/auth";

import { createUser, auth, storage, updateProfile as updateProfileAPI } from "../api";
import type { AuthHandler, GoogleAuthHandler, LogoutHandler, UpdateProfileHandler } from "../types";

export const MailAuth: AuthHandler = async (displayName, email, password, photoURL, event, router, isSignup) => {
  const { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } = await import("firebase/auth");
  const { getDownloadURL, ref, uploadString } = await import("firebase/storage");
  const { toast } = await import("react-hot-toast");

  event.preventDefault();

  toast.loading(isSignup ? "Creating your account..." : "Logging you in...", { id: "loading" });

  if (isSignup) {
    try {
      const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
      let imageName = "";

      for (let i = 0; i < characters.length; i++) {
        imageName += characters.charAt(Math.floor(Math.random() * characters.length));
      }

      const imageRef = ref(storage, `users/${imageName}.jpg`);

      await uploadString(imageRef, photoURL, "data_url");

      const imageLink: string = await getDownloadURL(imageRef);

      console.log(imageLink);

      await createUser({ username: displayName, email, image: imageLink });
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser as User, { displayName, photoURL: imageLink });
      await createUser({ username: displayName, image: imageLink, email });
      localStorage.setItem("user", JSON.stringify(auth.currentUser));
      router.replace("/");
    } catch (error: any) {
      toast.remove("loading");
      toast.error(`Failed to create your account, ${error.message}`);
    }
  } else {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("user", JSON.stringify(auth.currentUser));
      router.replace("/");
    } catch (error: any) {
      toast.remove("loading");
      toast.error(`Failed to login, ${error.message}`);
    }
  }
};

export const GoogleAuth: GoogleAuthHandler = async router => {
  const { signInWithPopup, GoogleAuthProvider } = await import("firebase/auth");
  const { toast } = await import("react-hot-toast");

  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    await createUser({
      email: auth?.currentUser?.email as string,
      username: auth?.currentUser?.displayName as string,
      image: auth?.currentUser?.photoURL as string,
    });
    localStorage.setItem("user", JSON.stringify(auth.currentUser));

    router.replace("/");
  } catch (error: any) {
    toast.error(`Could not sign in with Google, ${error.message}`);
  }
};

export const Logout: LogoutHandler = async router => {
  const { toast } = await import("react-hot-toast");

  try {
    await auth.signOut();
    localStorage.removeItem("user");
    router.replace("/auth");
  } catch (error: any) {
    toast.error(`Failed to log you out, ${error.message}`);
  }
};

export const UpdateProfile: UpdateProfileHandler = async (email, username, image, id, event) => {
  const { updateEmail, updateProfile } = await import("firebase/auth");
  const { toast } = await import("react-hot-toast");

  try {
    event.preventDefault();
    toast.loading("Updating your profile...", { id: "update-profile" });
    await updateProfile(auth.currentUser as User, {
      displayName: username,
      photoURL: image,
    });

    await updateEmail(auth.currentUser as User, email);

    await updateProfileAPI(id, {
      _id: id,
      image,
      username,
      email,
    });

    localStorage.setItem("user", JSON.stringify(auth.currentUser));
    toast.remove("update-profile");
    toast.success("Successfully updated your profile.");
    window.location.reload();
  } catch (error: any) {
    toast.error(`Failed to update your profile, ${error.message}`);
  }
};
