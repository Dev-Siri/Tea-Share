import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import type { NextPage } from "next";

import { useStateContext } from "../context/StateContext";

import Banner from "../assets/banner.svg";
import PurpleLogo from "../assets/DarkLogo.png";
import WhiteLogo from "../assets/LightLogo.png";

const Image = dynamic(() => import("next/image"));
const GoogleLogin = dynamic(() => import("../components/GoogleLogin"));
const FileBase64 = dynamic(() => import("react-file-base64"));

const Auth: NextPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({ username: "", email: "", password: "", photoURL: "" });

  const handleChange = (event: any) => setFormData({ ...formData, [event.target.name]: event.target.value });
  const changeAuthMode = () => setIsSignup(prevSignup => !prevSignup);

  const { themeMode, user } = useStateContext();

  useEffect(() => {
    if (user) router.replace("/");
    setIsSignup(true);
  }, []);

  const handleAuth = async (event: any, type: "mail" | "google") => {
    if (type === "mail") {
      const { MailAuth } = await import("../utils");
      MailAuth(formData.username, formData.email, formData.password, formData.photoURL, event, router, isSignup);
    } else {
      const { GoogleAuth } = await import("../utils");
      GoogleAuth(router);
    }
  };

  return (
    <div className={`auth ${themeMode === "dark" && "dark-page"}`}>
      <div className={`form ${themeMode === "dark" && "dark-page"}`}>
        <Image src={themeMode === "dark" ? WhiteLogo : PurpleLogo} alt="logo" height={100} width={200} loading="lazy" />
        <h1>{isSignup ? "Signup for" : "Login to"} Tea share</h1>
        <div className="form__spacer" />
        <div>
          <form className="form__form">
            <div>
              {isSignup && <input className={`form__form-input ${themeMode === "dark" && "dark-input"}`} value={formData.username} placeholder="Username" name="username" onChange={handleChange} />}
              <input className={`form__form-input ${themeMode === "dark" && "dark-input"}`} value={formData.email} placeholder="Email" type="email" name="email" onChange={handleChange} />
              <input className={`form__form-input ${themeMode === "dark" && "dark-input"}`} value={formData.password} placeholder="Password" type="password" name="password" onChange={handleChange} />
              {isSignup && (
                <div className={`form__form-input ${themeMode === "dark" && "dark-input"}`}>
                  <label htmlFor="file-input" hidden>
                    File Input
                  </label>
                  <FileBase64 id="file-input" multiple={false} onDone={({ base64 }) => setFormData({ ...formData, photoURL: base64 })} />
                </div>
              )}
            </div>
            <div className="form__button-container">
              <button type="submit" onClick={event => handleAuth(event, "mail")} className="form__button">
                {isSignup ? "Signup" : "Login"}
              </button>
              <p className="form__toggleText">
                {isSignup ? "Already an user? " : "Don't have an account? "}
                <span className="form__toggleText-interactive" onClick={changeAuthMode}>
                  {isSignup ? "Login" : "Signup"}
                </span>
              </p>
            </div>
            <GoogleLogin onClick={() => handleAuth(null, "google")} />
          </form>
        </div>
      </div>
      <Image src={Banner} alt="Tea Share, The brand new social networking application." height={944} width={1100} priority />
    </div>
  );
};

export default Auth;
