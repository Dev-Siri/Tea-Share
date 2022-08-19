import React, { FC } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';

import { LogoutButtonProps } from '../types';
import { useStateContext } from '../context/StateContext';

const LogoutButton:FC<LogoutButtonProps> = ({ handleLogout }) => {

  const { themeMode } = useStateContext();

  return (
    <button
      onClick={handleLogout}
      type="button"
      className={`logout-btn ${themeMode === 'dark' && 'dark-shadow'}`}
    >
      <AiOutlineLogout
        color="red"
        size={23} />
    </button>
  );
};

export default LogoutButton;