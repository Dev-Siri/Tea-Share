import React, { useState, useEffect } from "react";
import Image from 'next/image';
import FileBase64 from 'react-file-base64';
import { useRouter } from "next/router";
import type { NextPage } from "next";

import { useStateContext } from "../context/StateContext";
import Banner from "../assets/banner.svg";
import { GoogleAuth, MailAuth } from "../utils";
import { GoogleLogin } from '../components';
import PurpleLogo from '../assets/DarkLogo.png';
import WhiteLogo from '../assets/LightLogo.png';

const Auth: NextPage = () => {
  const [isSignup, setIsSignup] = useState(true);
  const router = useRouter();

  const [formData, setFormData] = useState({ username: '', email: '', password: '', photoURL: '' });
  
  const handleChange = (event: any) => setFormData({ ...formData, [event.target.name]: event.target.value });
  const changeAuthMode = () => setIsSignup((prevSignup) => !prevSignup);

  const { themeMode, user } = useStateContext();

  useEffect(() => {
    if (user) router.replace("/");
  }, []);

  return (
    <div className={`auth ${themeMode === "dark" && "dark-page"}`}>
      <div className={`form ${themeMode === 'dark' && 'dark-page'}`}>
        <Image src={themeMode === 'dark' ? WhiteLogo : PurpleLogo} alt="logo" height="100px" width="200px" loading="lazy" />
        <h1>{isSignup ? 'Signup for' : 'Login to'} Tea share</h1>
        <div className='form__spacer' />
        <div>
          <form className='form__form'>
            <div>
              {isSignup && <input className={`form__form-input ${themeMode === 'dark' && 'dark-input'}`} value={formData.username} placeholder='Username' name='username' onChange={handleChange} />}
              <input className={`form__form-input ${themeMode === 'dark' && 'dark-input'}`} value={formData.email} placeholder='Email' type='email' name='email' onChange={handleChange} />
              <input className={`form__form-input ${themeMode === 'dark' && 'dark-input'}`} value={formData.password} placeholder='Password' type='password' name='password' onChange={handleChange} />
              {isSignup &&
                <div className={`form__form-input ${themeMode === 'dark' && 'dark-input'}`}>
                  <label htmlFor="file-input" hidden>File Input</label>
                  <FileBase64 id="file-input" multiple={false} onDone={({ base64 }) => setFormData({ ...formData, photoURL: base64 })} />
                </div>}
            </div>
            <div className='form__button-container'>
              <button
                type='submit'
                onClick={(event) => MailAuth(formData.username, formData.email, formData.password, formData.photoURL, event, router, isSignup)}
                className='form__button'
              >
                {isSignup ? 'Signup' : 'Login'}
              </button>
              <p className='form__toggleText'>
                {isSignup ? 'Already an user? ' : 'Don\'t have an account? '}
                <span className='form__toggleText-interactive' onClick={changeAuthMode}>{isSignup ? 'Login' : 'Signup'}</span>
              </p>
            </div>
            <GoogleLogin onClick={GoogleAuth} />
          </form>
        </div>
      </div>
      <Image src={Banner} alt="tea share, the brand new social networking application." height={944} width={1100} priority />
    </div>
  );
};

export default Auth;