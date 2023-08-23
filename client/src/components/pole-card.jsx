import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import PoleOption from './pole-option';
import clsx from 'clsx';

const INFORMATION = {
  _id: 1,
  question: 'Chose your favorite color ?',
  discription:
    'This poll is crated to see what is the favorite color of Team Script Scouts ',
  options: ['red', 'green', 'blue', 'black'],
};

const { options, question, discription } = INFORMATION;

const PoleCard = () => {
  const [selected, setSelected] = useState('');

  // Submit button fucn ==>
  const handleSubmit = () => {
    if (!selected) {
      return console.log('No option selected');
    } else {
      console.log('Selected value:', selected);
      setSelected(null);
    }
  };

  return (
    <div className="m-0 mx-auto w-full">
      <div className="mx-auto w-full max-w-2xl rounded-md bg-[#1f1f38] p-[5%] ">
        <h2 className="mb-6 font-semibold text-center text-white text-md md:text-2xl">
          {question}
        </h2>

        <RadioGroup value={selected} onChange={setSelected}>
          <div className="space-y-2">
            {options?.map((option) => (
              <PoleOption option={option} key={option} />
            ))}
          </div>
        </RadioGroup>

        {/*Submit-button */}
        <span className="flex justify-center">
          <button
            onClick={handleSubmit}
            type="submit"
            disabled={!selected}
            className={clsx(
              'rounded mt-3 md:mt-5 px-3 md:px-5 py-1.5 md:py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300',
              !selected && 'cursor-not-allowed' // add cursor class conditionally
            )}>
            <span className="absolute right-0 -mt-12 w-8 h-32 bg-white opacity-10 transition-all duration-1000 transform rotate-12 translate-x-12 group-hover:-translate-x-40 ease"></span>

            <span className="relative">SUBMIT</span>
          </button>
        </span>
      </div>
    </div>
  );
};

export default PoleCard;
