import React from 'react';
import { RadioGroup } from '@headlessui/react';
import CheckIcon from './ui/check-icon';
import clsx from 'clsx';

const PoleOption = ({ option }) => {
  return (
    <RadioGroup.Option
      key={option}
      value={option}
      className={({ active, checked }) =>
        clsx(
          ' relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none',
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
                <RadioGroup.Label
                  as="p"
                  className={clsx(
                    'font-medium',
                    checked ? 'text-white' : 'text-gray-900'
                  )}>
                  {option}
                </RadioGroup.Label>
                {/* if more data need to add on the options cards the data will be added here.*/}
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
