import React, { FC } from 'react';
import { IoSettingsSharp } from 'react-icons/io5';
import { useRouter } from 'next/router';

import { Sidebar, LogoutButton, ThemeOption, ColorInput } from '../components';
import Theme_Colors from '../constants';
import { useStateContext } from '../context/StateContext';
import { auth } from '../api';

const Settings: FC = () => {
  const router = useRouter();
  const { switchColor, switchMode, themeMode } = useStateContext();

  const handleLogout = async () => {
    await auth.signOut().then(() => {
      localStorage.removeItem('user');
      router.replace('/auth');
    });
  };

  return (
    <div className={`settings ${themeMode === 'dark' && 'dark-page'}`}>
      <Sidebar isActive="settings" />
      <div className="settings__main">
        <div className="settings__head">
          <h1 className="settings__head_title">Settings</h1>
          <IoSettingsSharp size={30} />
          <LogoutButton handleLogout={handleLogout} />
        </div>
        <h2 className="settings__subtitle">Theme mode</h2>
        <div className="settings__theme-options">
          <ThemeOption title="Dark" handleClick={() => switchMode('dark')} />
          <ThemeOption title="Light" handleClick={() => switchMode('light')} />
        </div>
        <h2 className="settings__subtitle">Theme color</h2>
        <div className="settings__theme-color">
          {Theme_Colors.map((color) => (
            <ColorInput color={color} handleClick={() => switchColor(color)} key={color} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;
