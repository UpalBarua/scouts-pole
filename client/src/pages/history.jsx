import { BiSearch } from 'react-icons/bi';

const HistoryPage = () => {
  return (
    <section className="container flex flex-col gap-4 items-center">
      <h2 className="text-2xl font-bold text-center text-white">
        Pole History
      </h2>
      <form className="flex gap-3 items-center px-3 py-2 w-full text-lg rounded-lg border shadow-sm md:py-2.5 bg-primary-600 border-primary-500 sm:max-w-md md:px-3.5">
        <BiSearch className="text-xl" />
        <input
          className="w-full bg-transparent outline-none"
          type="text"
          placeholder="Search old poles"></input>
      </form>
      <div className="flex justify-center items-center"></div>
    </section>
  );
};

export default HistoryPage;
