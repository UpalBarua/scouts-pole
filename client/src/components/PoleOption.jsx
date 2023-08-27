import { RadioGroup } from '@headlessui/react';
import clsx from 'clsx';
import React from 'react';
import CheckIcon from './ui/check-icon';

const PoleOption = ({ option }) => {
  return (
    <RadioGroup.Option
      value={option}
      className={({ active, checked }) =>
        clsx(
          ' relative flex cursor-pointer rounded-lg   shadow-md focus:outline-none',
          // isUrl ? 'p-1 md:p-2' : 'px-3 md:px-5 md:py-4 py-2',
          {
            'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300':
              active,
            'bg-sky-900  bg-opacity-75 text-white': checked,
            'bg-white': !checked,
          }
        )
      }>
      {({ checked }) => (
        <>
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center">
              <div className="text-sm">
                <img
                  src={option.optionImage}
                  alt="image"
                  className="object-cover w-16 h-10 rounded-sm md:w-20 md:h-14"
                />
                <RadioGroup.Label
                  as="p"
                  className={clsx(
                    'font-medium',
                    checked ? 'text-white' : 'text-gray-900'
                  )}>
                  {option.option}
                </RadioGroup.Label>
              </div>
            </div>
            {checked && (
              <div className="text-white shrink-0">
                <CheckIcon className="w-6 h-6" />
              </div>
            )}
          </div>
        </>
      )}
    </RadioGroup.Option>
  );
};

export default PoleOption;
