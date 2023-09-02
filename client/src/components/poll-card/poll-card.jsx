import { RadioGroup } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { CgSpinner } from 'react-icons/cg';
import axios from '../../api/axios';
import useUser from '../../hooks/use-user';
import ResultChart from '../result-chart';
import Button from '../ui/button';
import CountdownTimer from './countdown-timer';
import PollMenu from './pole-menu';
import PollOption from './poll-option';
import { successToast, errorToast } from '../../utilities/toast';

const PollCard = ({
  _id,
  options,
  title,
  description,
  expiresAt,
  isActive,
}) => {
  const { userData } = useUser();
  const [selectedOption, setSelectedOption] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
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
        return errorToast('No option selected');
      }

      if (!userData?._id) {
        console.log(userData);
        return errorToast('Something went wrong');
      }

      await axios.patch(`/polls/${_id}`, {
        userId: userData?._id,
        optionId: selectedOption,
      });

      successToast('Vote submitted');
    } catch (error) {
      console.error(error);
      errorToast('Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePollActiveToggle = async (pollId) => {
    try {
      await axios.patch(`/polls/toggle/${pollId}`, { isActive: false });
      toast('The poll has expired');
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4 mx-auto space-y-2 w-full rounded-lg border shadow border-primary-700 sm:p-6 bg-primary-900 md:w-[42rem]">
      {displayResults ? (
        <ResultChart voter={userData} pollId={_id} />
      ) : (
        <>
          <div className="flex gap-2 justify-between items-start">
            <h3 className="text-lg font-bold text-white sm:text-xl md:text-2xl">
              {title}
            </h3>
            <PollMenu pollId={_id} isActive={isActive} />
          </div>
          <p className="pb-3 whitespace-normal break-all">{description}</p>
          <RadioGroup
            disabled={!isActive}
            value={selectedOption}
            onChange={setSelectedOption}
            className="space-y-3">
            {options?.map((option) => (
              <PollOption key={option._id} {...option} />
            ))}
          </RadioGroup>
        </>
      )}
      <div className="flex flex-col gap-3 justify-between pt-5 sm:items-center sm:flex-row">
        <CountdownTimer
          expiresAt={expiresAt}
          onExpire={() => handlePollActiveToggle(_id)}
          isActive={isActive}
        />
        <div className="flex gap-2 justify-end items-center">
          <Button
            variant="secondary"
            onClick={() =>
              setDisplayResults((prevDisplayResults) => !prevDisplayResults)
            }>
            {displayResults ? (
              <span>Show Poll</span>
            ) : (
              <>
                <span className="hidden sm:inline-block">Show</span>
                <span>Results</span>
              </>
            )}
          </Button>
          {isActive ? (
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
                <>
                  <span>Submit</span>
                  <span className="hidden sm:inline-block">Vote</span>
                </>
              )}
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PollCard;
