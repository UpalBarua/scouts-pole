import { RadioGroup } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { CgSpinner } from 'react-icons/cg';
import axios from '../../api/axios';
import useUser from '../../hooks/use-user';
import ResultChart from '../result-chart';
import Button from '../ui/button';
import PollOption from './poll-option';
import { Menu } from '@headlessui/react';
import { Transition } from '@headlessui/react';
import { BiMenu } from 'react-icons/bi';
import { Fragment } from 'react';
import PollMenu from './pole-menu';

const PollCard = ({ _id, options, title, description }) => {
  const { userData } = useUser();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [displayResults, setDisplayResults] = useState(false);

  useEffect(() => {
    const prevVotedOption = options.find((option) =>
      option.votes.includes(userData?._id)
    )?._id;

    setSelectedOption(prevVotedOption);
  }, [options, userData, setSelectedOption]);

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);

      if (!selectedOption) {
        return toast.error('No option selected');
      }

      if (!userData?._id) {
        console.log(userData);
        return toast.error('Something went wrong');
      }

      await axios.patch(`/polls/${_id}`, {
        userId: userData?._id,
        optionId: selectedOption,
      });

      toast.success('Vote submitted');
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col p-4 space-y-2 w-full max-w-full rounded-lg shadow sm:p-6 bg-primary-900">
      {displayResults ? (
        <ResultChart voter={userData} pollId={_id} />
      ) : (
        <>
          <h3 className="text-lg font-bold text-white sm:text-xl md:text-2xl">
            {title}
          </h3>
          <p className="pb-3">{description}</p>
          <RadioGroup
            value={selectedOption}
            onChange={setSelectedOption}
            className="space-y-3">
            {options?.map((option) => (
              <PollOption key={option._id} {...option} />
            ))}
          </RadioGroup>
        </>
      )}
      <div className="flex gap-3 justify-end items-center pt-4">
        <PollMenu pollId={_id} />
        <Button
          variant="secondary"
          onClick={() =>
            setDisplayResults((prevDisplayResults) => !prevDisplayResults)
          }>
          Show Results
        </Button>
        <Button
          variant="primary"
          disabled={isSubmitting}
          onClick={handleSubmit}>
          {isSubmitting ? (
            <>
              <CgSpinner className="text-xl animate-spin" />
              <span>Submitting</span>
            </>
          ) : (
            <span>Submit Vote</span>
          )}
        </Button>
      </div>
    </div>
  );
};

export default PollCard;
