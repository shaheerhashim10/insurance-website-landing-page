import React from 'react';
import { BasicProps } from './types/BasicTypes';
import classNames from 'classnames';

type SecondaryButtonProps = BasicProps & {
  onClick?: () => void;
};

const SecondaryButton = (props: SecondaryButtonProps) => {
  const { className, children, ...restProps } = props;
  return (
    <button
      className={classNames(
        'absolute bg-[#0B0F17] rounded-[106px] text-xl font-medium bottom-5 left-5',
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
