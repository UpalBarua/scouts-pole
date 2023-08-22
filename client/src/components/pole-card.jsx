import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import PolOption from './PolOption';
import clsx from 'clsx';

const INFORMATION =
{
  _id: 1,
  question: "Chose your favorite color ?",
  discription: "This poll is crated to see what is the favorite color of Team Script Scouts ",
  options: ['red', 'green', 'blue', 'black'],
}
const { options, question, discription } = INFORMATION




const Polecard = () => {

  const [selected, setSelected] = useState(null)
  // Submit button fucn ==>
  const handleSubmit = () => {
    if (!selected) {
      return console.log('No option selected');
    }
    else {
      console.log('Selected value:', selected);
      setSelected(null);
    }
  }


  return (
    <div className="w-full m-0 mx-auto ">
      <div className="mx-auto w-full max-w-2xl rounded-md bg-[#1f1f38]   p-[5%] ">
        <h1 className='mb-6 font-semibold text-center text-white text-md md:text-2xl '>{question}</h1>

        <RadioGroup value={selected} onChange={setSelected}>

          <div className="space-y-2">
            {options?.map((singleOption) =>

              <PolOption singleOption={singleOption} key={singleOption}></PolOption>
            )}
          </div>
        </RadioGroup>


        {/*Submit-button */}
        <span className='flex justify-center'>
          <button
            onClick={handleSubmit}
            type='submit'
            disabled={!selected}
            className={clsx(
              "rounded mt-3 md:mt-5 px-3 md:px-5 py-1.5 md:py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300",
              !selected && 'cursor-not-allowed', // add cursor class conditionally
            )}
          >
            <span className='absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease '></span>

            <span className="relative">SUBMIT</span>
          </button>
        </span>


      </div>
    </div>

  )
};

export default Polecard;


