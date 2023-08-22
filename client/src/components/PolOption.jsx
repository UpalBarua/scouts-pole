import React from 'react';
import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx';



const PolOption = ({ singleOption }) => {

   const CheckIcon = (props) => {
      return (
         <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
            <path
               d="M7 13l3 3 7-7"
               stroke="#fff"
               strokeWidth={1.5}
               strokeLinecap="round"
               strokeLinejoin="round"
            />
         </svg>
      )
   }

   return (
      <RadioGroup.Option
         key={singleOption}
         value={singleOption}
         className={({ active, checked }) =>
            `${active && 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'}
             ${checked ? 'bg-sky-900  bg-opacity-75 text-white' : 'bg-white'
            }
          relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
         }
      >

         {({  checked }) => (
            <>
               <div className="flex items-center justify-between w-full">
                  <div className="flex items-center">
                     <div className="text-sm">
                        <RadioGroup.Label
                           as="p"
                           className={clsx("font-medium ", checked ? "text-white" : "text-gray-900"
                           )}
                        >
                           {singleOption}
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

export default PolOption;




