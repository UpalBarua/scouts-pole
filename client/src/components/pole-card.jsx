import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';

// TODO - Use clsx
// TODO - Extract option into different component

const INFORMATION = {
  _id: 1,
  question: 'Chose your favorite color ?',
  description:
    'This poll is crated to see what is the favorite color of Team Script Scouts ',
  options: ['red', 'green', 'blue', 'black'],
};

const PoleCard = () => {
  const [selected, setSelected] = useState('');

  const { options, question, description } = INFORMATION;

  // Submit button fucn ==>
  const handleSubmit = () => {
    if (!selected) {
      return console.log('No option selected');
    }

    console.log('Selected value:', selected);
    setSelected(null);
  };

  return (
    <div className="m-0 mx-auto w-full">
      {/* Disciption eikhane thakbe      */}
      <div className="mx-auto w-full max-w-2xl rounded-md bg-[#1f1f38] p-[5%]">
        <h1 className="mb-6 font-semibold text-center text-white text-md md:text-2xl">
          {question}
        </h1>

        {/* options */}
        <RadioGroup
          value={selected}
          onChange={setSelected}
          className="space-y-2">
          {options?.map((option) => (
            <RadioGroup.Option
              key={option}
              value={option}
              className={({ active, checked }) =>
                `${
                  active
                    ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                    : ''
                }
        ${checked ? 'bg-sky-900  bg-opacity-75 text-white' : 'bg-white'}
          relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
              }>
              {({ checked }) => (
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center text-sm">
                    <RadioGroup.Label
                      as="p"
                      className={`font-medium ${
                        checked ? 'text-white' : 'text-gray-900'
                      }`}>
                      {option}
                    </RadioGroup.Label>
                    <RadioGroup.Description
                      as="span"
                      className={`inline ${
                        checked ? 'text-sky-100' : 'text-gray-500'
                      }`}></RadioGroup.Description>
                  </div>
                  {checked && (
                    <div className="text-white shrink-0">
                      <CheckIcon className="w-6 h-6" />
                    </div>
                  )}
                </div>
              )}
            </RadioGroup.Option>
          ))}
        </RadioGroup>

        {/*Submit-button */}
        <span className="flex justify-center">
          <button
            onClick={handleSubmit}
            type="submit"
            disabled={!selected}
            className={`rounded mt-3 md:mt-5 px-3 md:px-5 py-1.5 md:py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300`}
            style={!selected ? { cursor: 'not-allowed' } : {}}>
            <span
              className={`absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease ${
                !selected
                  ? 'opacity-0' // Hide the mouse when button is disabled
                  : ''
              }`}></span>
            <span className="relative">SUBMIT</span>
          </button>
        </span>
      </div>
    </div>
  );
};

export default PoleCard;

function CheckIcon(props) {
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
  );
}
