import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { GoogleLoginProps } from '../types';

const GoogleLogin: FC<GoogleLoginProps> = ({ onClick }) => {
  const router = useRouter();
  
  return (
    <button
      type="button"
      onClick={() => onClick(router)}
      className='google-btn'
    >
      <FcGoogle size={24}/>
      <p className='google-btn__text'>
        Sign in with Google
      </p>
    </button>
  );
}

export default GoogleLogin;