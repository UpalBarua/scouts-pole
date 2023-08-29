import { RadioGroup } from '@headlessui/react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { CgSpinner } from 'react-icons/cg';
import axios from '../../api/axios';
import Button from '../ui/button';
import PoleOption from './pole-option';

const PoleCard = ({ _id, options, title, description }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);

      if (!selectedOption) {
        return toast.error('No option selected');
      }

      await axios.patch(`/pole/${_id}`, {
        userId: 'upal@mail.com',
        optionId: selectedOption._id,
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
      <h3 className="text-lg font-bold text-white sm:text-xl md:text-2xl">
        {title}
      </h3>
      <p className="pb-3">{description}</p>
      <RadioGroup
        value={selectedOption}
        onChange={setSelectedOption}
        className="space-y-3">
        {options?.map((option) => (
          <PoleOption key={option._id} {...option} />
        ))}
      </RadioGroup>
      <div className="flex gap-3 justify-end items-center pt-4">
        <Button variant="secondary">Change Vote</Button>
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

export default PoleCard;
