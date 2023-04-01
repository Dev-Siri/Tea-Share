import lazy from "next/dynamic";

import type { PageComponent } from "@/types";
import type { Metadata } from "next";

import Logo from "@/components/Logo";

const GoogleLogin = lazy(() => import("@/components/GoogleLogin"));
const LoginForm = lazy(() => import("@/components/LoginForm"));
const Image = lazy(() => import("next/image"));

export const metadata: Metadata = {
  title: "Login | Sign up",
  description: "Login to Tea Share to connect and share posts with your friends online.",
};

const Auth: PageComponent = () => (
  <section className="flex h-screen w-screen">
    <article className="mr-16 h-fit w-[95%] pl-5 pt-3 duration-200 sm:mr-10 md:w-[350px]">
      <Logo bigger />
      <LoginForm />
      <GoogleLogin />
    </article>
    <Image
      src="/images/banner.webp"
      alt="Tea Share, The brand new social networking application."
      height={944}
      width={1100}
      className="hidden h-full w-screen md:inline"
      priority
    />
  </section>
);

export default Auth;
