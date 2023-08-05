import React from 'react';
import { BasicProps } from './types/BasicTypes';
import classNames from 'classnames';

type ButtonProps = BasicProps & {
  onClick?: () => void;
};

const Button = (props: ButtonProps) => {
  const { className, children, ...restProps } = props;
  return (
    <button className={classNames('bg-[#84D7E9]', className)} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
