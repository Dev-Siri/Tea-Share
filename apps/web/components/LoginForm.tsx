"use client";
import { useRouter } from "next/navigation";
import { useState, type FC, type FormEventHandler } from "react";

import type { InfiniteItems } from "@/types";

const LoginForm: FC = () => {
  const [isSignup, setIsSignup] = useState(false);

  const router = useRouter();

  const loginWithEmail: FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const { username, email, password, image } = Object.fromEntries(form.entries()) as InfiniteItems & { image: File | null };

    if (isSignup) {
      const { Signup } = await import("@/utils/auth");

      await Signup(username, image, email, password);
    } else {
      const { Login } = await import("@/utils/auth");

      await Login(email, password);
    }

    router.refresh();
    router.replace("/");
  };

  return (
    <>
      <h1 className="mb-7 ml-2 mt-3 h-px w-[310px] text-3xl font-bold">{isSignup ? "Signup" : "Login"}</h1>
      <form className="flex flex-col" onSubmit={loginWithEmail}>
        {isSignup && <input className="input" placeholder="Username" name="username" required />}
        <input className="input" placeholder="Email" type="email" name="email" required />
        <input className="input" placeholder="Password" type="password" name="password" required />
        {isSignup && <input type="file" name="image" aria-label="Profile Picture Upload" className="input" required />}
        <div className="mt-[60px] flex h-fit items-center">
          <button
            type="submit"
            className="border-primary bg-primary hover:bg-primary-dark ml-2 h-10 w-[150px] cursor-pointer rounded-md border-[1px] text-white duration-200"
          >
            {isSignup ? "Signup" : "Login"}
          </button>
          <p className="ml-10px w-[390px] text-sm">
            {isSignup ? "Already an user? " : "Don't have an account? "}
            <span
              className="text-primary hover:text-primary-dark cursor-pointer duration-200"
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
