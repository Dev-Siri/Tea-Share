import { lazy } from "react";

import type { PageComponent } from "@/types";
import type { Metadata } from "next";

import LoadingSpinner from "@/components/ui/LoadingSpinner";
import Logo from "@/components/ui/Logo";
import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";

const GoogleLogin = lazy(() => import("@/components/forms/buttons/GoogleLogin"));
const LoginForm = lazy(() => import("@/components/forms/LoginForm"));

const description = "Login to Tea Share to connect and share posts with your friends online.";

export const metadata: Metadata = {
  title: "Login | Sign up",
  description,
  openGraph: {
    title: "Login | Sign up",
    description,
  },
  twitter: {
    title: "Login | Sign up",
    description,
  },
};

const Auth: PageComponent = () => (
  <main className="dark:bg-dark-gray h-screen w-screen px-6 pt-3 duration-200 dark:text-white">
    <Logo bigger />
    <LoginForm loadingSpinner={<LoadingSpinner height={20} width={20} />} />
    <GoogleLogin>
      <FcGoogle size={24} />
      <p className="ml-10px text-black">Sign in with Google</p>
    </GoogleLogin>
  </main>
);

export default Auth;
