import type { GoogleAuthHandler, LoginHandler, LogoutHandler, SignupHandler, UpdateProfileHandler } from "@types";
import type { User } from "firebase/auth";

export const Signup: SignupHandler = async (username, image, email, password, router) => {
  const { createUserWithEmailAndPassword, updateProfile, getIdToken } = await import("firebase/auth");
  const { getDownloadURL, ref, uploadBytes } = await import("firebase/storage");
  const { getRandomString } = await import("./globals");
  const { storage, auth } = await import("@api/firebase");
  const { createUser } = await import("@api/fetchers");
  const { toast } = await import("react-hot-toast");
  const { setCookie } = await import("./cookies");

  if (!username || !image) return toast.error("All the fields were not provided for sign up.") as unknown as void;

  try {
    const imageName = getRandomString();

    const imageRef = ref(storage, `users/${imageName}`);

    await uploadBytes(imageRef, image);

    const imageLink: string = await getDownloadURL(imageRef);

    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(user, {
      displayName: username,
      photoURL: imageLink,
    });
    await createUser({
      username,
      image: imageLink,
      email,
    });

    const authToken: string = await getIdToken(user);

    setCookie("auth_token", authToken);
    router.replace("/");
  } catch (error: any) {
    const { mailAuthErrorFormater } = await import("./errors");
    const errorMessage = mailAuthErrorFormater(error.message);

    toast.remove("loading");
    toast.error(`Failed to create your account, ${errorMessage}`);
  }
};

export const Login: LoginHandler = async (email, password, router) => {
  const { signInWithEmailAndPassword, getIdToken } = await import("firebase/auth");
  const { toast } = await import("react-hot-toast");
  const { setCookie } = await import("./cookies");
  const { auth } = await import("@api/firebase");

  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    const authToken = await getIdToken(user);

    setCookie("auth_token", authToken);
    router.replace("/");
  } catch (error: any) {
    const { mailAuthErrorFormater } = await import("./errors");
    const errorMessage = mailAuthErrorFormater(error.message);

    toast.remove("loading");
    toast.error(`Failed to login, ${errorMessage}`);
  }
};

export const GoogleAuth: GoogleAuthHandler = async router => {
  const { signInWithPopup, getIdToken, GoogleAuthProvider } = await import("firebase/auth");
  const { createUser } = await import("@api/fetchers");
  const { toast } = await import("react-hot-toast");
  const { setCookie } = await import("./cookies");
  const { auth } = await import("@api/firebase");

  try {
    const provider = new GoogleAuthProvider();

    const { user } = await signInWithPopup(auth, provider);

    await createUser({
      email: user.email as string,
      username: user.displayName as string,
      image: user.photoURL as string,
    });

    const authToken: string = await getIdToken(user);

    setCookie("auth_token", authToken);
    router.replace("/");
  } catch (error: any) {
    const { googleAuthErrorFormater } = await import("./errors");
    const errorMessage = googleAuthErrorFormater(error.message);
    toast.error(`Could not sign in with Google, ${errorMessage}`);
  }
};

export const Logout: LogoutHandler = async router => {
  const { removeCookie } = await import("./cookies");
  const { toast } = await import("react-hot-toast");
  const { auth } = await import("@api/firebase");

  try {
    await auth.signOut();
    removeCookie("auth_token");
    router.replace("/auth");
  } catch (error: any) {
    toast.error(`Failed to log you out, ${error.message}`);
  }
};

export const UpdateProfile: UpdateProfileHandler = async (email, username, image, id) => {
  const { updateEmail, updateProfile, getIdToken } = await import("firebase/auth");
  const { getDownloadURL, ref, uploadBytes } = await import("firebase/storage");
  const { updateProfile: updateProfileAPI } = await import("@api/fetchers");
  const { storage, auth } = await import("@api/firebase");
  const { getRandomString } = await import("./globals");
  const { toast } = await import("react-hot-toast");
  const { setCookie } = await import("./cookies");

  try {
    const imageName = getRandomString();

    const imageRef = ref(storage, `users/${imageName}.jpg`);

    await uploadBytes(imageRef, image as File);

    const uploadedImage = await getDownloadURL(imageRef);

    toast.loading("Updating your profile...", { id: "update-profile" });
    await updateProfile(auth.currentUser as User, {
      displayName: username,
      photoURL: uploadedImage,
    });

    await updateEmail(auth.currentUser as User, email);

    await updateProfileAPI(id, { _id: id, image: uploadedImage, username, email });

    const authToken: string = await getIdToken(auth.currentUser as User);

    setCookie("auth_token", authToken);

    toast.remove("update-profile");
    toast.success("Successfully updated your profile.");
    location.reload();
  } catch (error: any) {
    toast.error(`Failed to update your profile, ${error.message}`);
  }
};
