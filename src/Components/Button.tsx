import React, { FC } from 'react';

interface IButton {
  children: React.ReactElement | string;
}

const Button: FC<IButton> = ({ children }) => {
  return <button className='button'>{children}</button>;
};

export default Button;
