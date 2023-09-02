import clsx from 'clsx';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BiImageAdd } from 'react-icons/bi';
import { CgSpinner } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io';
import axios from '../api/axios';
import Button from '../components/ui/button';
import uploadImage from '../utilities/uploadImage';
import { successToast } from '../utilities/toast';

const NewPoll = () => {
  const [optionInputFields, setOptionInputFields] = useState([null]);
  const [optionImages, setOptionImages] = useState([]);
  const [isPollSubmitting, setIsPollSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async ({ title, description, options, expiration }) => {
    try {
      setIsPollSubmitting(true);

      const optionImageUrls = await Promise.all(
        optionImages?.map(async (image) => await uploadImage(image))
      );

      const optionsArray = optionInputFields.map((_, index) => {
        return {
          option: options[index],
          optionImage: optionImageUrls[index],
        };
      });

      const newPoll = {
        title,
        description,
        options: optionsArray,
        createdAt: new Date(),
        expiresAt: new Date(expiration.date + 'T' + expiration.time),
        isActive: true,
      };

      await axios.post('/polls', newPoll);

      successToast('Poll added');
      setOptionImages([]);
      setOptionInputFields([null]);
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setIsPollSubmitting(false);
    }
  };

  const addNewOptionInputField = () => {
    setOptionInputFields((prevOptionInputFields) => [
      ...prevOptionInputFields,
      null,
    ]);
  };

  const removeInputField = (removeIndex) => {
    setOptionInputFields((prevOptionInputFields) =>
      prevOptionInputFields.filter((_, index) => index !== removeIndex)
    );

    setOptionImages((prevOptionImages) =>
      prevOptionImages.filter((_, index) => index !== removeIndex)
    );
  };

  return (
    <main className="container py-5">
      <h2 className="text-2xl font-bold text-center text-white md:text-3xl md:pb-8 font-secondary">
        Add a new poll
      </h2>
      <form
        className="px-1 mx-auto space-y-5 max-w-xl rounded-xl sm:p-8 sm:border border-primary-700 sm:shadow sm:bg-primary-900"
        onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="space-y-2">
          <label className="font-medium">Title</label>
          <input
            className="px-4 py-2.5 w-full rounded-lg border border-primary-600 transition-colors shadow-sm bg-primary-700 outline-none focus-visible:border-accent-500"
            type="text"
            {...register('title', {
              required: 'Title is required',
              minLength: {
                value: 5,
                message: 'Title must be at least 5 characters',
              },
              maxLength: {
                value: 50,
                message: 'Title cannot exceed 50 characters in length',
              },
            })}
          />
          {errors.title?.message && (
            <p className="text-sm text-red-500">{errors.title.message}</p>
          )}
        </fieldset>
        <fieldset className="space-y-2">
          <label className="font-medium">Description</label>
          <textarea
            className="px-4 py-2.5 w-full rounded-lg border border-primary-600 transition-colors shadow-sm bg-primary-700 resize-none h-36 outline-none focus-visible:border-accent-500 "
            type="text"
            {...register('description', {
              required: 'Description is required',
              minLength: {
                value: 10,
                message: 'Title must be at least 10 characters',
              },
              maxLength: {
                value: 100,
                message: 'Title cannot exceed 100 characters in length',
              },
            })}
          />
          {errors.description?.message && (
            <p className="text-sm text-red-500">{errors.description.message}</p>
          )}
        </fieldset>
        <div className="space-y-5">
          {optionInputFields.map((_, index) => (
            <fieldset className="space-y-3" key={index}>
              <label className="font-medium">Option {index + 1}</label>
              <div className="flex gap-2 items-center">
                <input
                  className="px-4 py-2.5 w-full rounded-lg border border-primary-600 transition-colors shadow-sm bg-primary-700 outline-none focus-visible:border-accent-500"
                  type="text"
                  {...register(`options.${index}`, {
                    required: 'Option is required',
                    minLength: {
                      value: 3,
                      message: 'Option must be at least 3 characters',
                    },
                    maxLength: {
                      value: 50,
                      message: 'Title cannot exceed 50 characters in length',
                    },
                  })}
                />
                <input
                  id={`file-input-${index}`}
                  className="hidden"
                  type="file"
                  onChange={(e) =>
                    setOptionImages((prevOptionImages) => {
                      const updatedOptionsImages = [...prevOptionImages];
                      updatedOptionsImages[index] = e.target.files[0];
                      return updatedOptionsImages;
                    })
                  }
                />
                <label
                  className={clsx(
                    'p-2 text-2xl text-white rounded-lg border border-primary-500 cursor-pointer',
                    !optionImages[index] && 'bg-primary-600',
                    optionImages[index] && 'bg-accent-500'
                  )}
                  htmlFor={`file-input-${index}`}>
                  <BiImageAdd />
                </label>
                <button
                  className="p-2 text-2xl text-white bg-red-500 rounded-lg hover:bg-red-500/90"
                  onClick={() => removeInputField(index)}>
                  <IoMdClose />
                </button>
              </div>
              {optionImages?.[index] && (
                <img
                  className="object-cover object-center w-full rounded-md"
                  src={URL.createObjectURL(optionImages[index])}
                  alt=""
                />
              )}
              {errors?.options?.[index]?.message && (
                <p className="text-sm text-red-500">
                  {errors.options[index].message}
                </p>
              )}
            </fieldset>
          ))}
        </div>
        <fieldset className="space-y-2">
          <label className="font-medium">Expiration</label>
          <div className="flex flex-col gap-3 items-center sm:flex-row">
            <input
              className="px-4 py-2.5 w-full rounded-lg border border-primary-600 transition-colors shadow-sm bg-primary-700 outline-none focus-visible:border-accent-500"
              type="date"
              {...register('expiration.date', {
                required: 'Expiration date is required',
                validate: (val) =>
                  new Date(val) - new Date() <= 0 ? 'Invalid date' : null,
              })}
            />
            <input
              className="px-4 py-2.5 w-full rounded-lg border border-primary-600 transition-colors shadow-sm bg-primary-700 outline-none focus-visible:border-accent-500"
              type="time"
              {...register('expiration.time', {
                required: 'Expiration time is required',
              })}
            />
          </div>
          {errors.expiration && (
            <p className="text-sm text-red-500">
              {errors.expiration.time?.message}{' '}
              {errors.expiration.date?.message}
            </p>
          )}
        </fieldset>
        <div className="flex gap-2 justify-end items-center pt-4">
          <Button
            onClick={addNewOptionInputField}
            variant="secondary"
            type="button">
            Add Input
          </Button>
          <Button disabled={isPollSubmitting} type="submit" variant="primary">
            {isPollSubmitting ? (
              <>
                <CgSpinner className="text-2xl animate-spin" />
                <span>Submitting</span>
              </>
            ) : (
              <span>Submit Poll</span>
            )}
          </Button>
        </div>
      </form>
    </main>
  );
};

export default NewPoll;
