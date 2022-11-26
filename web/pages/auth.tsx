import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import type { NextPage } from "next";
import type { AuthHandler, UserSubmitFormData } from "../types";

import useStateContext from "../hooks/useStateContext";

import Banner from "../assets/banner.svg";
import PurpleLogo from "../assets/DarkLogo.png";
import WhiteLogo from "../assets/LightLogo.png";

const Image = dynamic(() => import("next/image"));
const GoogleLogin = dynamic(() => import("../components/GoogleLogin"));

const Auth: NextPage = () => {
  const [isSignup, setIsSignup] = useState<boolean>(false);
  const router = useRouter();

  const [formData, setFormData] = useState<UserSubmitFormData>({ username: "", email: "", password: "", photoURL: "" });

  const handleChange = (event: any) => setFormData({ ...formData, [event.target.name]: event.target.value });
  const changeAuthMode = () => setIsSignup(prevSignup => !prevSignup);

  const { themeMode } = useStateContext();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user") as string)) router.replace("/");
  }, []);

  const handleAuth: AuthHandler = async (event, type) => {
    event?.preventDefault();

    if (type === "mail") {
      const { MailAuth } = await import("../utils/auth");
      MailAuth(formData.username, formData.email, formData.password, formData.photoURL, router, isSignup);
    } else {
      const { GoogleAuth } = await import("../utils/auth");
      GoogleAuth(router);
    }
  };

  return (
    <section className="flex h-screen w-screen dark:bg-black dark:text-white">
      <article className="mr-[60px] h-fit w-[350px] pt-[10px] pl-5 duration-[250ms]">
        <Image src={themeMode === "dark" ? WhiteLogo : PurpleLogo} alt="Logo" height={100} width={200} loading="lazy" />
        <h1 className={`mt-3 mb-7 h-px w-[310px] text-3xl font-bold ${isSignup ? "text-center" : "ml-2"}`}>
          {isSignup ? "Signup for" : "Login to"} Tea share
        </h1>
        <form className="flex flex-col" onSubmit={event => handleAuth(event, "mail")}>
          {isSignup && (
            <input
              className="mt-5 ml-[5px] w-full rounded-md border-[1px] border-light-gray p-[15px] outline-none duration-[250ms] focus:border-primary dark:border-semi-gray dark:bg-semi-gray dark:text-white"
              value={formData.username}
              placeholder="Username"
              name="username"
              required
              onChange={handleChange}
            />
          )}
          <input
            className="mt-5 ml-[5px] w-full rounded-md border-[1px] border-light-gray p-[15px] outline-none duration-[250ms] focus:border-primary dark:border-semi-gray dark:bg-semi-gray dark:text-white"
            value={formData.email}
            placeholder="Email"
            type="email"
            name="email"
            required
            onChange={handleChange}
          />
          <input
            className="mt-5 ml-[5px] w-full rounded-md border-[1px] border-light-gray p-[15px] outline-none duration-[250ms] focus:border-primary dark:border-semi-gray dark:bg-semi-gray dark:text-white"
            value={formData.password}
            placeholder="Password"
            type="password"
            name="password"
            required
            onChange={handleChange}
          />
          {isSignup && (
            <input
              aria-label="Profile Picture Upload"
              className="mt-5 ml-[5px] w-full rounded-md border-[1px] border-light-gray p-[15px] outline-none duration-[250ms] focus:border-primary dark:border-semi-gray dark:bg-semi-gray dark:text-white"
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
      <Image src={Banner} alt="Tea Share, The brand new social networking application." height={944} width={1100} className="h-full" priority />
    </section>
  );
};

export default Auth;
