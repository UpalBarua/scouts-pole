import { RadioGroup } from '@headlessui/react';
import { clsx } from 'clsx';
import { useState } from 'react';
import PoleOption from './PoleOption';
import axios from '../api/axios';

const PoleCard = ({ _id, options, title, description }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSubmit = async () => {
    const { data } = await axios.patch(`/pole/${_id}`, {
      userId: 'upal@mail.com',
      optionId: selectedOption._id,
    });

    if (!selectedOption) {
      return console.log('No option selected');
    } else {
      console.log('Selected value:', selectedOption);
      setSelectedOption(null);
    }
  };

  return (
    <div className="my-4 md:my-20 mx-auto w-[90%]">
      <div className="mx-auto w-full max-w-2xl rounded-md bg-dark-900 p-[5%] md:p-[4%] text-white">
        <h2 className="mx-auto mb-4 text-2xl font-bold md:mb-6 text-start md:text-center font-secondary">
          {title}
        </h2>
        <h2 className="mb-3 text-center text-white md:mb-6 font-secondary">
          {description}
        </h2>

        <RadioGroup value={selectedOption} onChange={setSelectedOption}>
          <div className="space-y-2">
            {options?.map((option) => (
              <PoleOption option={option} key={option._id} />
            ))}
          </div>
        </RadioGroup>

        {/*Submit-button */}
        <span className="flex gap-2 justify-center md:gap-3">
          <button
            onClick={handleSubmit}
            type="submit"
            className={clsx(
              'rounded mt-3 md:mt-5 px-3 md:px-5 py-1.5 md:py-2.5 text-sm overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300',
              !selectedOption && 'cursor-not-allowed' //? add cursor class conditionally
            )}>
            <span className="absolute right-0 -mt-12 w-8 h-32 bg-white opacity-10 transition-all duration-1000 transform rotate-12 translate-x-12 group-hover:-translate-x-40 ease"></span>

            <span className="relative">SUBMIT</span>
          </button>
          <button
            disabled={!selectedOption}
            type="reset"
            className={clsx(
              'rounded mt-3 md:mt-5 px-2.5 md:px-4 py-1 md:py-2 text-sm  overflow-hidden group bg-red-500 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300',
              !selectedOption && 'cursor-not-allowed'
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
