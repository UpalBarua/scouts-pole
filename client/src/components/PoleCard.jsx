import { RadioGroup } from '@headlessui/react';
import { clsx } from 'clsx';
import { useState } from 'react';
import PoleOption from './PoleOption';

const INFORMATION = {
  _id: 1,
  question: 'Chose your favorite color ?',
  discription:
    'This pole is crated to see what is the favorite color of Team Script Scouts ',
  options: ['red', 'green', 'blue', 'black'],
  imgOptions: [
    'https://i.ibb.co/0ccyY2D/b4-1.jpg',
    'https://i.ibb.co/frP7PNF/IMG-20230623-WA0068.jpg',
    'https://i.ibb.co/Gd146dc/240-F-617942260-gq2ms-Ocduq6-V0k9-Ea-Up-Z0r-U3m-Gj-Am-Klx.jpg',
    'https://i.ibb.co/Zgs8Wvn/awppw-gvgcx.jpg',
  ],
};

const { options, question, discription, imgOptions } = INFORMATION;

const  PoleCard= () => {
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
    <div className="my-4 md:my-20 mx-auto w-[90%]">
      <h2 className="mx-auto mb-4 text-sm font-semibold text-black md:mb-6 text-start md:text-center md:text-lg">
        {discription}
      </h2>
      <div className="mx-auto w-full max-w-2xl rounded-md bg-[#1f1f38] p-[5%] md:p-[4%] ">
        <h2 className="mb-3 font-semibold text-center text-white md:mb-4 text-md md:text-2xl">
          {question}
        </h2>

        <RadioGroup value={selected} onChange={setSelected}>
          <div className="space-y-2">
            {imgOptions?.map(
              (
                option,
                index //? for testing the image options pass image options as argument and if you want to pass text options you can pass the text options i already  added 2 kinds of data on the INFORMATION array..
              ) => (
                <PoleOption option={option} index={index} key={index} />
              )
            )}
          </div>
        </RadioGroup>

        {/*Submit-button */}
        <span className="flex gap-2 justify-center md:gap-3">
          <button
            onClick={handleSubmit}
            type="submit"
            className={clsx(
              'rounded mt-3 md:mt-5 px-3 md:px-5 py-1.5 md:py-2.5 text-sm overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300',
              !selected && 'cursor-not-allowed' //? add cursor class conditionally
            )}>
            <span className="absolute right-0 -mt-12 w-8 h-32 bg-white opacity-10 transition-all duration-1000 transform rotate-12 translate-x-12 group-hover:-translate-x-40 ease"></span>

            <span className="relative">SUBMIT</span>
          </button>
          <button
            disabled={!selected}
            type="reset"
            className={clsx(
              'rounded mt-3 md:mt-5 px-2.5 md:px-4 py-1 md:py-2 text-sm  overflow-hidden group bg-red-500 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300',
              !selected && 'cursor-not-allowed'
            )}>
            <span className="absolute right-0 -mt-12 w-8 h-32 bg-white opacity-10 transition-all duration-1000 transform rotate-12 translate-x-12 group-hover:-translate-x-40 ease"></span>

            <span className="relative">Edit</span>
          </button>
        </span>
      </div>
    </div>
  );
};

export default PoleCard;
