const HistoryPage = () => {
  const histories = [
    {
      title: ' What do you value most personally?',
      description:
        'Work-Life balance Career Progression Relationships colleagues Earning tons of money',
    },
    {
      title: 'What projects are you most proud of? ',
      description:
        'Reduce the duration Create an agenda for discussion Hold them more  less frequently Someone new hosts each session',
    },
    {
      title: ' How can we improve the value of these meetings?',
      description:
        'Work-Life balance Career Progression Relationships colleagues Earning tons of money',
    },
    {
      title: ' What do we do well?',
      description:
        'Work-Life balance Career Progression Relationships colleagues Earning tons of money',
    },
  ];

  return (
    <div>
      <h3 className="font-medium text-center text-purple-500">
        Our Scouts Pole History
      </h3>
      <div className="flex justify-center py-5">
        <div className="flex justify-around w-11/12 text-center border border-gray-100 md:w-6/12">
          <input
            className="px-2 py-1 w-full hover:outline-0"
            type="text"
            placeholder="Search your poll history"
          />
          <button type="submit" className="px-6 py-1 text-white bg-purple-600">
            Submit
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div>
          {histories?.map((history, index) => (
            <ul
              key={index}
              className="flex justify-between items-center p-4 my-2 rounded-md border border-gray-200 shadow-sm">
              <li>
                <h3 className="py-2 font-bold">{history?.title}</h3>
                <p className="max-w-lg">{history.description}</p>
              </li>
              <button className="p-2 rounded-full hover:bg-red-500 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
