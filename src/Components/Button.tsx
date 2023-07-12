import React, { FC } from 'react';

interface IButton {
  children: React.ReactElement | string;
  onClick?: () => void;
}

const Button: FC<IButton> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className='button'>
      {children}
    </button>
  );
};

export default Button;
