import { IoSettingsSharp } from 'react-icons/io5';
import FileBase64 from 'react-file-base64';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';

import { fetchUserByQuery } from '../api';
import { Sidebar, LogoutButton, ThemeOption, ColorInput } from '../components';
import Theme_Colors from '../constants';
import { useStateContext } from '../context/StateContext';
import { Logout, UpdateProfile } from '../utils';

const Settings: NextPage = () => {
  const { switchColor, switchMode, themeMode, themeColor, user } = useStateContext();
  const router = useRouter();

  const [username, setUsername] = useState<string>(user?.displayName);
  const [email, setEmail] = useState<string>(user?.email);
  const [image, setImage] = useState<string>(user?.photoURL);
  const [userID, setUserID] = useState('');

  useEffect(() => {
    const fetchId = async () => {
      const { data: fetchedUser } = await fetchUserByQuery(`${user?.displayName}`);
      const id = fetchedUser._id;
      
      setUserID(id);
    }

    fetchId();
  }, []);

  return (
    <div className={`settings ${themeMode === 'dark' ? 'dark-page' : ''}`}>
      <Sidebar isActive='settings' />
      <div className='settings__main'>
        <div className='settings__head'>
          <h1 className='settings__head_title'>Settings</h1>
          <IoSettingsSharp size={30} />
          <LogoutButton handleLogout={() => Logout(router)} />
        </div>
        <form className={`settings__main_user-form ${themeMode === 'dark' && 'dark-container'}`} onSubmit={event => UpdateProfile(email, username, image, userID, event)}>
          <h2>User Profile</h2>
          <div className='settings__main_user-form__input_container'>
            <input onChange={(event) => setUsername(event.target.value)} value={username} className={`settings__main_user-form__input ${themeMode === 'dark' && 'dark-input'}`} placeholder='Username' />
            <input onChange={(event) => setEmail(event.target.value)} value={email} className={`settings__main_user-form__input ${themeMode === 'dark' && 'dark-input'}`} placeholder='Email' />
            <div className={`settings__main_user-form__input ${themeMode === 'dark' && 'dark-input'}`}>
              <FileBase64 multiple={false} onDone={({ base64 }) => setImage(base64)} />
            </div>
          </div>
          <button
            style={{ background: themeColor }}
            type='submit'
            className='settings__main_user-form__submit-button'
          >
            Update Profile
          </button>
        </form>
        <div className={`settings__main_container ${themeMode === 'dark' && 'dark-container'}`}>
          <h2 className='settings__subtitle'>Theme mode</h2>
          <div className='settings__theme-options'>
            <ThemeOption title='Dark' handleClick={() => switchMode('dark')} />
            <ThemeOption title='Light' handleClick={() => switchMode('light')} />
          </div>
        </div>
        <div className={`settings__main_container-colors ${themeMode === 'dark' && 'dark-container'}`}>
          <h2 className='settings__subtitle'>Theme color</h2>
          <div className='settings__theme-color'>
            {Theme_Colors.map(color => <ColorInput color={color} handleClick={() => switchColor(color)} key={color} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;