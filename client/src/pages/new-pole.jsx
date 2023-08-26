import { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';

const NewPole = () => {
  const [optionInputFields, setOptionInputFields] = useState([null]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = ({ title, description, ...options }) => {
    const newPole = {
      title,
      description,
      options: [...Object.values(options)],
    };
  };

  const addNewOptionInputField = () => {
    setOptionInputFields((prevOptionInputFields) => [
      ...prevOptionInputFields,
      null,
    ]);
  };

  return (
    <div className=" w-full lg:w-[550px] mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label className="block mb-2 font-bold text-gray-700">Title</label>
          <input
            className="px-4 py-2 w-full rounded-md border border-purple-400 transition-colors duration-300 ease-in-out focus:ring focus:ring-blue-300 focus:outline-none"
            type="text"
            {...register('title')}
          />
        </fieldset>
        <fieldset>
          <label className="block mb-2 font-bold text-gray-700">
            Description
          </label>
          <textarea
            className="px-4 py-2 w-full h-32 rounded-lg border border-purple-400 transition-colors duration-300 ease-in-out focus:ring focus:ring-blue-300 focus:outline-none"
            type="text"
            {...register('description')}
          />
        </fieldset>
        <fieldset>
          {optionInputFields.map((inputObj, index) => (
            <Fragment key={index}>
              <label className="block mb-2 font-bold text-black">
                Option {index + 1}
              </label>
              <input
                className="px-4 py-2 w-full rounded-lg border border-purple-400 transition-colors duration-300 ease-in-out focus:ring focus:ring-blue-300 focus:outline-none"
                type="text"
                {...register(`option${index}`)}
              />
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
          type="submit"
          className="px-6 py-3 mt-4 font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:from-purple-700 hover:to-pink-700 hover:scale-105">
          submit
        </button>
      </form>
    </div>
  );
};

export default NewPole;
