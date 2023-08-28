import { RadioGroup } from '@headlessui/react';
import clsx from 'clsx';
import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

const PoleOption = ({ option, optionImage }) => {
  return (
    <RadioGroup.Option
      value={option}
      className={({ active, checked }) =>
        clsx(
          'relative flex cursor-pointer rounded-lg shadow focus:outline-none p-2 sm:p-3 border border-primary-700 transition-colors',
          {
            'border-accent-500': active,
            'bg-accent-500/25 text-white border-2 border-accent-500': checked,
            'bg-primary-800': !checked,
          }
        )
      }>
      {({ checked }) => (
        <>
          <div className="flex flex-col space-y-2 w-full">
            <div className="flex justify-between items-center">
              <RadioGroup.Label
                as="p"
                className={clsx('text-lg  ps-1', checked && 'text-white')}>
                {option}
              </RadioGroup.Label>
              {checked && (
                <BsCheckCircleFill className="w-5 h-5 text-accent-500" />
              )}
            </div>
            {optionImage ? (
              <img
                className="object-cover object-center mt-2 w-full rounded-lg"
                src={optionImage}
                alt={option}
              />
            ) : null}
          </div>
        </>
      )}
    </RadioGroup.Option>
  );
};

export default PoleOption;
