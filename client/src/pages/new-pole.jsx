import { Fragment, useState } from 'react';
import { get, useForm } from 'react-hook-form';
import axios from '../api/axios';
import OptionField from '../components/new-pole-form/option-filed';
import uploadImage from '../utilities/uploadImage';

const NewPole = () => {
  const [optionInputFields, setOptionInputFields] = useState([null]);
  const [optionImages, setOptionImages] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async ({ title, description, options }) => {
    try {
      const optionImageUrls = await Promise.all(
        optionImages?.map(async (image) => await uploadImage(image))
      );

      const optionsArray = optionImageUrls.map((_, index) => {
        return {
          option: options[index],
          optionImage: optionImageUrls[index],
        };
      });

      const newPole = {
        title,
        description,
        options: optionsArray,
        votes: [],
      };

      await axios.post('/pole', newPole);

      setOptionImages([]);
      reset();
    } catch (error) {
      console.log(error);
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
  };

  return (
    <div className=" w-full lg:w-[550px] mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label className="block mb-2 font-bold text-gray-700">Title</label>
          <input
            className="px-4 py-2 w-full rounded-md border border-purple-400 transition-colors duration-300 ease-in-out focus:ring focus:ring-blue-300 focus:outline-none"
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
            <p className="text-sm text-red-400">{errors.title.message}</p>
          )}
        </fieldset>
        <fieldset>
          <label className="block mb-2 font-bold text-gray-700">
            Description
          </label>
          <textarea
            className="px-4 py-2 w-full h-32 rounded-lg border border-purple-400 transition-colors duration-300 ease-in-out resize-none focus:ring focus:ring-blue-300 focus:outline-none"
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
            <p className="text-sm text-red-400">{errors.description.message}</p>
          )}
        </fieldset>
        <fieldset>
          {optionInputFields.map((_, index) => (
            <Fragment key={index}>
              <label className="block mb-2 font-bold text-black">
                Option {index + 1}
              </label>
              <div>
                <input
                  className="px-4 py-2 w-full rounded-lg border border-purple-400 transition-colors duration-300 ease-in-out focus:ring focus:ring-blue-300 focus:outline-none"
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
                  type="file"
                  onChange={(e) =>
                    setOptionImages((prevOptionImages) => [
                      ...prevOptionImages,
                      e.target.files[0],
                    ])
                  }
                />
                {optionImages[index] && (
                  <img src={URL.createObjectURL(optionImages[index])} alt="" />
                )}
              </div>

              {errors[`option${index}`]?.message && (
                <p className="text-sm text-red-400">
                  {errors[`option${index}`].message}
                </p>
              )}
              <button onClick={() => removeInputField(index)}>remove</button>
            </Fragment>
          ))}
        </fieldset>

        <button
          onClick={addNewOptionInputField}
          type="button"
          className="px-6 py-3 mt-4 font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:from-purple-700 hover:to-pink-700 hover:scale-105">
          Add Input
        </button>
        <button
          disabled={isSubmitting}
          type="submit"
          className="px-6 py-3 mt-4 font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-md transition duration-300 ease-in-out transform disabled:bg-gray-500 hover:from-purple-700 hover:to-pink-700 hover:scale-105">
          submit
        </button>
      </form>
    </div>
  );
};

export default NewPole;
