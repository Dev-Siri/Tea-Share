import { toast } from "react-hot-toast";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, User, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { createUser, auth } from "../api";
import type { AuthHandler, GoogleAuthHandler, LogoutHandler } from "../types";

export const MailAuth: AuthHandler = async (displayName, email, password, photoURL, event, router, isSignup) => {
  event.preventDefault();

  toast.loading(isSignup ? "Creating your account..." : "Logging you in...", { id: 'loading' });
  if (isSignup) {
    try {
      await createUser({ username: displayName, email, image: photoURL });
      await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(auth.currentUser as User, { displayName, photoURL })
      await createUser({ username: displayName, image: photoURL, email });
      localStorage.setItem("user", JSON.stringify(auth.currentUser));
      router.replace("/");
    } catch (error: any) {
      toast.remove('loading');
      toast.error(`Failed to create your account, ${error.message}`);
    }
  } else {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      localStorage.setItem("user", JSON.stringify(auth.currentUser));
      router.replace("/");
    } catch (error: any) {
      toast.remove('loading');
      toast.error(`Failed to login, ${error.message ===
        'Firebase: Error (auth/invalid-email).'
        ? 'Invalid email' :
        error.message === 'Error (auth/wrong-password).'
          ? 'Invalid password'
          : error.message
        }`);
    }
  }
};

export const GoogleAuth: GoogleAuthHandler = async (router) => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    await createUser({
      email: auth?.currentUser?.email as string,
      username: auth?.currentUser?.displayName as string,
      image: auth?.currentUser?.photoURL as string,
    });
    localStorage.setItem('user', JSON.stringify(auth.currentUser));

    router.replace('/');
  } catch (error: any) {
    toast.error(`Could not sign in with Google, ${error.message}`);
  }
}

export const Logout: LogoutHandler = async (router) => {
  await auth.signOut();
  localStorage.removeItem('user');
  router.replace('/auth');
}

export const UpdateProfile = async () => {
    
}