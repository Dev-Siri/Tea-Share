"use client";
import { useState, type FC, type ReactNode } from "react";

import { login, signup } from "@/actions/auth";

interface Props {
  loadingSpinner: ReactNode;
}

const LoginForm: FC<Props> = ({ loadingSpinner }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <h1 className="ml-2 mt-3 text-3xl font-bold">{isSignup ? "Signup to join the community!" : "Welcome back! Login to continue."}</h1>
      <form action={isSignup ? signup : login} onSubmit={() => setLoading(true)}>
        {isSignup && <input className="input" placeholder="Username" name="username" required />}
        <input className="input" placeholder="Email" type="email" name="email" required />
        <input className="input" placeholder="Password" type="password" name="password" required />
        {isSignup && <input type="file" name="image" aria-label="Profile Picture Upload" className="input" required />}
        <div className="mt-[60px] flex h-fit items-center">
          <button disabled={loading} type="submit" className="btn ml-2 h-10 gap-2">
            {isSignup ? "Signup" : "Login"}
            {loading && loadingSpinner}
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
