import React, { useState } from 'react';
import { IoSettingsSharp } from 'react-icons/io5';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';

import { Sidebar, LogoutButton, ThemeOption, ColorInput } from '../components';
import Theme_Colors from '../constants';
import { useStateContext } from '../context/StateContext';
import { Logout, UpdateProfile } from '../utils';

const Settings: NextPage = () => {
  const { switchColor, switchMode, themeMode, themeColor, user } = useStateContext();
  const router = useRouter();

  const [username, setUsername] = useState<string>(user?.displayName);
  const [email, setEmail] = useState<string>(user?.email);

  return (
    <div className={`settings ${themeMode === 'dark' && 'dark-page'}`}>
      <Sidebar isActive="settings" />
      <div className="settings__main">
        <div className="settings__head">
          <h1 className="settings__head_title">Settings</h1>
          <IoSettingsSharp size={30} />
          <LogoutButton handleLogout={() => Logout(router)} />
        </div>
        <form className={`settings__main_user-form ${themeMode === 'dark' && 'dark-container'}`} onSubmit={UpdateProfile}>
          <h2>User Profile</h2>
          <div className="settings__main_user-form__input_container">
            <input onChange={() => {}} value={username} className={`settings__main_user-form__input ${themeMode === 'dark' && 'dark-input'}`} placeholder="Username" type="text" />
            <input onChange={() => {}} value={email} className={`settings__main_user-form__input ${themeMode === 'dark' && 'dark-input'}`} placeholder="Email" type="text" />
          </div>
          <button style={{ background: themeColor }} type="submit" className="settings__main_user-form__submit-button">
            Update Profile
          </button>
        </form>
        <div className={`settings__main_container ${themeMode === 'dark' && 'dark-container'}`}>
          <h2 className="settings__subtitle">Theme mode</h2>
          <div className="settings__theme-options">
            <ThemeOption title="Dark" handleClick={() => switchMode('dark')} />
            <ThemeOption title="Light" handleClick={() => switchMode('light')} />
          </div>
        </div>
        <div className={`settings__main_container-colors ${themeMode === 'dark' && 'dark-container'}`}>
          <h2 className="settings__subtitle">Theme color</h2>
          <div className="settings__theme-color">
            {Theme_Colors.map(color => <ColorInput color={color} handleClick={() => switchColor(color)} key={color} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;