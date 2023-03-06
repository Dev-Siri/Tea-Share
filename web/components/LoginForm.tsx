"use client";
import { useRouter } from "next/navigation";
import { useState, type FC, type FormEventHandler } from "react";

import { inputStyles } from "@styles/commonStyles";
import { InfiniteItems } from "@types";

const LoginForm: FC = () => {
  const [isSignup, setIsSignup] = useState(false);

  const router = useRouter();

  const loginWithEmail: FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const { username, email, password, image } = Object.fromEntries(form.entries()) as InfiniteItems & { image: File | null };

    if (isSignup) {
      const { Signup } = await import("@utils/auth");

      Signup(username, image, email, password, router);
    } else {
      const { Login } = await import("@utils/auth");

      Login(email, password, router);
    }
  };

  return (
    <>
      <h1 className="mt-3 mb-7 ml-2 h-px w-[310px] text-3xl font-bold">{isSignup ? "Signup" : "Login"}</h1>
      <form className="flex flex-col" onSubmit={loginWithEmail}>
        {isSignup && <input className={inputStyles} placeholder="Username" name="username" required />}
        <input className={inputStyles} placeholder="Email" type="email" name="email" required />
        <input className={inputStyles} placeholder="Password" type="password" name="password" required />
        {isSignup && <input type="file" name="image" aria-label="Profile Picture Upload" className={inputStyles} required />}
        <div className="mt-[60px] flex h-fit items-center">
          <button
            type="submit"
            className="ml-2 h-10 w-[150px] cursor-pointer rounded-md border-[1px] border-primary bg-primary text-white duration-200 hover:bg-primary-dark"
          >
            {isSignup ? "Signup" : "Login"}
          </button>
          <p className="ml-[10px] w-[390px] text-sm">
            {isSignup ? "Already an user? " : "Don't have an account? "}
            <span
              className="cursor-pointer text-primary duration-200 hover:text-primary-dark"
              onClick={() => setIsSignup(previsSignup => !previsSignup)}
            >
              {isSignup ? "Login" : "Signup"}
            </span>
          </p>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
