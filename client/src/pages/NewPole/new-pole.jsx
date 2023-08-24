import { useState } from 'react';

const NewPole = () => {
  const [inputList, setInputList] = useState([]); // Initial input list with one empty input

  const addInput = () => {
    setInputList([...inputList, { option: '' }]);
  };

  const handleInputChange = (index, value) => {
    const updatedInputList = [...inputList];
    updatedInputList[index].option = value;
    setInputList(updatedInputList);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const allData = {
      title: event.target.title.value,
      description: event.target.description.value,
      options: inputList.map((inputObj) => inputObj.option),
    };
    console.log(allData);
  };
  return (
    <div className=" w-full lg:w-[550px] mx-auto">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label className="block mb-2 font-bold text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            className="px-4 py-2 w-full rounded-md border border-purple-400 transition-colors duration-300 ease-in-out focus:ring focus:ring-blue-300 focus:outline-none"
          />
        </fieldset>
        <fieldset>
          <label className="block mb-2 font-bold text-gray-700">
            Description :
          </label>
          <textarea
            className="px-4 py-2 w-full h-32 rounded-lg border border-purple-400 transition-colors duration-300 ease-in-out focus:ring focus:ring-blue-300 focus:outline-none"
            type="text"
            name="description"
          />
        </fieldset>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {inputList.map((inputObj, index) => (
            <div key={index}>
              <label className="block mb-2 font-bold text-black">Option</label>
              <input
                type="text"
                placeholder={`Input ${index + 1}`}
                name={`option${index}`}
                value={inputObj.option}
                onChange={(e) => handleInputChange(index, e.target.value)}
                className="px-4 py-2 w-full rounded-lg border border-purple-400 transition-colors duration-300 ease-in-out focus:ring focus:ring-blue-300 focus:outline-none"
              />
            </div>
          ))}
        </div>

        <div className="mt-4">
          <button
            onClick={addInput}
            className="px-6 py-3 mt-4 font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:from-purple-700 hover:to-pink-700 hover:scale-105">
            Add Input
          </button>
        </div>
        <div className="mt-6">
          <button className="px-6 py-3 mt-4 font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:from-purple-700 hover:to-pink-700 hover:scale-105">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPole;
