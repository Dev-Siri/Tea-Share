import dynamic from "next/dynamic";
import { useRouter, type NextRouter } from "next/router";
import { useEffect, useState } from "react";

import type { AuthHandler, UserSubmitFormData } from "@types";
import type { NextPage } from "next";

import useStateContext from "@hooks/useStateContext";
import { authInputStyles } from "@styles/commonStyles";

const Image = dynamic(() => import("next/image"));
const GoogleLogin = dynamic(() => import("@components/GoogleLogin"));

const Auth: NextPage = () => {
  const [isSignup, setIsSignup] = useState<boolean>(false);
  const router: NextRouter = useRouter();

  const [formData, setFormData] = useState<UserSubmitFormData>({ username: "", email: "", password: "", photoURL: "" });

  const handleChange = (event: any) => setFormData({ ...formData, [event.target.name]: event.target.value });
  const changeAuthMode = () => setIsSignup(prevSignup => !prevSignup);

  const { themeMode } = useStateContext();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) router.replace("/");
  }, [router]);

  const handleAuth: AuthHandler = async (event, type) => {
    event?.preventDefault();

    if (type === "mail") {
      const { MailAuth } = await import("@utils/auth");
      MailAuth(formData.username, formData.email, formData.password, formData.photoURL, router, isSignup);
    } else {
      const { GoogleAuth } = await import("@utils/auth");
      GoogleAuth(router);
    }
  };

  return (
    <section className="flex h-screen w-screen">
      <article className="mr-[60px] h-fit w-[350px] pt-[10px] pl-5 duration-[250ms]">
        <Image src={themeMode === "dark" ? "/images/logo-white.webp" : "/images/logo-purple.webp"} alt="Logo" height={100} width={200} priority />
        <h1 className={`mt-3 mb-7 h-px w-[310px] text-3xl font-bold ${isSignup ? "text-center" : "ml-2"}`}>
          {isSignup ? "Signup for" : "Login to"} Tea Share
        </h1>
        <form className="flex flex-col" onSubmit={event => handleAuth(event, "mail")}>
          {isSignup && (
            <input className={authInputStyles} value={formData.username} placeholder="Username" name="username" required onChange={handleChange} />
          )}
          <input className={authInputStyles} value={formData.email} placeholder="Email" type="email" name="email" required onChange={handleChange} />
          <input
            className={authInputStyles}
            value={formData.password}
            placeholder="Password"
            type="password"
            name="password"
            required
            onChange={handleChange}
          />
          {isSignup && (
            <input
              type="file"
              aria-label="Profile Picture Upload"
              className={authInputStyles}
              onChange={event => setFormData({ ...formData, photoURL: event.target.files?.[0] })}
            />
          )}
          <div className="mt-[60px] flex h-fit items-center">
            <button
              type="submit"
              className="ml-2 h-10 w-[150px] cursor-pointer rounded-md border-[1px] border-primary bg-primary text-white duration-[250ms] hover:bg-primary-dark"
            >
              {isSignup ? "Signup" : "Login"}
            </button>
            <p className="ml-[10px] w-[390px] text-sm">
              {isSignup ? "Already an user? " : "Don't have an account? "}
              <span className="cursor-pointer text-primary duration-[250ms] hover:text-primary-dark" onClick={changeAuthMode}>
                {isSignup ? "Login" : "Signup"}
              </span>
            </p>
          </div>
          <GoogleLogin onClick={() => handleAuth(null, "google")} />
        </form>
      </article>
      <picture className="hidden min-[560px]:inline">
        <source media="(max-width: 620px)" srcSet="/images/smaller-banner.webp" />
        <Image
          src="/images/banner.webp"
          alt="Tea Share, The brand new social networking application."
          height={944}
          width={1100}
          className="h-full"
          priority
        />
      </picture>
    </section>
  );
};

export default Auth;
