import React, { FC } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

import { ThemeOptionProps } from '../types';
import { useStateContext } from '../context/StateContext';

const ThemeOption:FC<ThemeOptionProps> = ({ title, handleClick }) => {

  const { themeMode } = useStateContext();

  return (
      <button
        type='button'
        onClick={handleClick}
        className={`theme-option ${themeMode === 'dark' && 'dark-shadow'}`}
      >
        <div className="theme-option__icon">
            {title === "Dark" ?
              <BsFillMoonFill size={17} />
              : <BsFillSunFill size={17} />}
        </div>
        {title}
      </button>
  );
};

export default ThemeOption;