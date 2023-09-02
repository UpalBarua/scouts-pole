import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const Button = ({ variant, className, children, ...props }) => {
  return (
    <button
      className={twMerge(
        clsx(
          'font-medium px-5 py-2.5 rounded-lg flex items-center gap-1 shadow-sm border text-center justify-center text-white disabled:opacity-50 w-full sm:w-auto',
          {
            'bg-accent-500  border-accent-500': variant === 'primary',
            'bg-primary-700 border-primary-600': variant === 'secondary',
            'bg-red-500 border-red-500 hover:bg-red-500/90':
              variant === 'danger',
          }
        ),
        className
      )}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
