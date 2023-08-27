import React from 'react';
import { useState } from 'react';

const OptionField = ({ register, index, getValues, setValue }) => {
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setValue('fileInput', selectedFile);
  };

  return (
    <>
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
          {...register(`optionImages${index}`)}
          onChange={(e) => setValue(`optionImages${index}`, e.target.files[0])}
        />
        {getValues(`optionImages${index}`)?.[0] ? (
          <img
            src={URL.createObjectURL(getValues(`optionImages${index}`)?.[0])}
            alt=""
          />
        ) : (
          <p>fuck</p>
        )}
      </div>

      {errors[`option${index}`]?.message && (
        <p className="text-sm text-red-400">
          {errors[`option${index}`].message}
        </p>
      )}
      <button onClick={() => removeInputField(index)}>remove</button>
    </>
  );
};

export default OptionField;
