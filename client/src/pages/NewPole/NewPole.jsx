import { useState } from "react";

const NewPole = () => {
  const [inputList, setInputList] = useState([{ option: "" }]); // Initial input list with one empty input

  const addInput = () => {
    setInputList([...inputList, { option: "" }]);
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
      <h1 className="font-bold text-center text-purple-600 text-[1.8rem]">
        Scouts Pole
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block mb-2 font-bold text-gray-700">Title</label>
          <div>
            <input
              type="text"
              name="title"
              className="w-full px-4 py-2 transition-colors duration-300 ease-in-out border border-purple-400 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label className="block mb-2 font-bold text-gray-700">
            Description :
          </label>
          <div>
            <textarea
              type="text"
              name="description"
              className="w-full h-32 px-4 py-2 transition-colors duration-300 ease-in-out border border-purple-400 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {inputList.map((inputObj, index) => (
            <div key={index}>
              <label className="block mb-2 font-bold text-black ">Option</label>
              <input
                type="text"
                placeholder={`Input ${index + 1}`}
                name={`option${index}`}
                value={inputObj.option}
                onChange={(e) => handleInputChange(index, e.target.value)}
                className="w-full px-4 py-2 transition-colors duration-300 ease-in-out border border-purple-400 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              />
            </div>
          ))}
        </div>
        <div className="mt-4">
          <button
            onClick={addInput}
            className="px-6 py-3 mt-4 font-semibold text-white transition duration-300 ease-in-out transform rounded-lg shadow-md bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-700 hover:to-pink-700 hover:scale-105"
          >
            Add Input
          </button>
        </div>
        <div className="mt-6">
          <button className="px-6 py-3 mt-4 font-semibold text-white transition duration-300 ease-in-out transform rounded-lg shadow-md bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-700 hover:to-pink-700 hover:scale-105">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPole;
