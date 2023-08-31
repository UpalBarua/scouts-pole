import { BiSearch } from 'react-icons/bi';
import usePoles from '../hooks/use-poles';
import { CgSpinner } from 'react-icons/cg';
import PoleCard from '../components/pole-card/pole-card';
import { useEffect, useState } from 'react';

const HistoryPage = () => {
  const { poles, polesLoading, polesError } = usePoles();

  const [filterString, setFilterString] = useState('');
  const [filteredPoles, setFilteredPoles] = useState({});

  useEffect(() => {
    const result = poles.filter(
      (pole) =>
        pole.title.includes(filterString) ||
        pole.description.includes(filterString) ||
        pole.options
          .map((option) => option.option.includes(filterString))
          .includes(true)
    );

    setFilteredPoles(result);
  }, [filterString, poles]);

  return (
    <main className="container flex flex-col items-center py-5 max-w-7xl md:py-10">
      <h2 className="pb-5 text-2xl font-bold text-center text-white md:text-3xl md:pb-8">
        Pole History
      </h2>
      <form className="flex mb-5 gap-3 items-center px-3 py-2 w-full text-lg rounded-lg border shadow-sm md:py-2.5 bg-primary-700 border-primary-600 max-w-lg md:px-3.5">
        <BiSearch className="text-xl" />
        <input
          className="w-full bg-transparent border-0 outline-none focus-visible:ring-0"
          type="text"
          placeholder="Search old poles"
          onChange={(e) => setFilterString(e.target.value)}
          value={filterString}
        />
      </form>
      <div className="mx-auto space-y-4 max-w-2xl">
        {polesLoading ? (
          <div className="flex gap-2 items-center h-[40vh] text-xl font-medium">
            <CgSpinner className="text-2xl animate-spin" />
            <p>loading poles...</p>
          </div>
        ) : polesError ? (
          <div className="flex gap-2 items-center h-[40vh] text-xl font-medium">
            <p>failed to load poles</p>
          </div>
        ) : (
          filteredPoles?.map((pole) => <PoleCard key={pole._id} {...pole} />)
        )}
      </div>
    </main>
  );
};

export default HistoryPage;
