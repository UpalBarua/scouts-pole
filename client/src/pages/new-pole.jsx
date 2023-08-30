import { Fragment, useState } from 'react';
import { get, useForm } from 'react-hook-form';
import axios from '../api/axios';
import OptionField from '../components/new-pole-form/option-filed';
import uploadImage from '../utilities/uploadImage';

const NewPole = () => {
  const [optionInputFields, setOptionInputFields] = useState([null]);
  const [optionImages, setOptionImages] = useState([]);
  const [isPoleSubmitting, setIsPoleSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async ({ title, description, options }) => {
    try {
      setIsPoleSubmitting(true);

      const optionImageUrls = await Promise.all(
        optionImages?.map(async (image) => await uploadImage(image))
      );

      const optionsArray = optionInputFields.map((_, index) => {
        return {
          option: options[index],
          optionImage: optionImageUrls[index],
        };
      });

      const newPole = {
        title,
        description,
        options: optionsArray,
      };

      await axios.post('/pole', newPole);

      setOptionImages([]);
      reset();
    } catch (error) {
      console.log(error);
    } finally {
      setIsPoleSubmitting(false);
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
    <section className="container">
      <form
        className="px-3 mx-auto space-y-5 max-w-xl rounded-lg sm:p-8 sm:border border-primary-700 sm:shadow sm:bg-primary-900 sm:my-5"
        onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-2xl font-bold text-white">Add a new pole</h2>
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
                    'p-2 text-2xl text-white rounded-lg border border-primary-500',
                    !optionImages[index] && 'bg-primary-600',
                    optionImages[index] && 'bg-accent-500'
                  )}
                  htmlFor={`file-input-${index}`}>
                  <BiImageAdd />
                </label>
                <button
                  className="p-2 text-2xl text-white bg-red-500 rounded-lg"
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
        <div className="flex gap-2 justify-end items-center pt-4">
          <Button onClick={addNewOptionInputField} variant="secondary">
            Add Input
          </Button>
          <Button disabled={isPoleSubmitting} type="submit" variant="primary">
            {isPoleSubmitting && <BiLoaderAlt className="animate-spin" />}
            <span>Submit Pole</span>
          </Button>
        </div>
      </form>
    </section>
  );
};

export default NewPole;
