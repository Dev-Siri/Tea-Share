import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, User } from "firebase/auth";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import type { NextPage } from "next";

import { useStateContext } from "../context/StateContext";
import { AuthHandlerType } from "../types";
import { Form } from "../components";
import Banner from "../assets/banner.svg";
import { auth, createUser } from "../api";

const Auth: NextPage = () => {
  const [isSignup, setIsSignup] = useState(true);
  const router = useRouter();

  const { themeMode, user } = useStateContext();

  useEffect(() => {
    if (user) router.replace("/");
  }, []);

  const handleAuth: AuthHandlerType = async (displayName, email, password, photoURL, event) => {
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

  return (
    <div className={`auth ${themeMode === "dark" && "dark-page"}`}>
      <Form
        handleAuth={handleAuth}
        isSignup={isSignup}
        setIsSignup={setIsSignup}
      />
      <Image
        src={Banner}
        alt="tea share, the brand new social networking application."
        height={944}
        width={1100}
        priority
      />
    </div>
  );
};

export default Auth;