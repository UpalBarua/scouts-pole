import { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import PollCard from '../components/poll-card/poll-card';
import LoadingSpinner from '../components/ui/loading-spinner';
import usePolls from '../hooks/use-polls';

const HistoryPage = () => {
  const { polls, pollsLoading, pollsError } = usePolls('inactive');

  const [filterString, setFilterString] = useState('');
  const [filteredPolls, setFilteredPolls] = useState({});

  useEffect(() => {
    const result = polls.filter(
      (poll) =>
        poll.title.toLowerCase().includes(filterString) ||
        poll.description.toLowerCase().includes(filterString) ||
        poll.options
          .map((option) => option.option.toLowerCase().includes(filterString))
          .includes(true)
    );

    setFilteredPolls(result);
  }, [filterString, polls]);

  return (
    <main className="container flex flex-col items-center py-5 max-w-7xl md:py-10">
      <h2 className="pb-5 text-2xl font-bold text-center text-white md:text-3xl md:pb-8 font-secondary">
        Poll History
      </h2>
      <form className="flex items-center px-3 py-1 mb-5 w-full md:w-[42rem] text-lg rounded-lg border shadow-sm md:py-2 bg-primary-700 border-primary-600 md:px-5">
        <BiSearch className="text-xl" />
        <input
          className="w-full bg-transparent border-0 outline-none focus-visible:ring-0"
          type="text"
          placeholder="Search old polls"
          onChange={(e) => setFilterString(e.target.value.toLowerCase())}
          value={filterString}
        />
      </form>
      <div className="mx-auto space-y-4 max-w-2xl">
        {pollsLoading ? (
          <LoadingSpinner />
        ) : pollsError ? (
          <div className="flex items-center h-[50dvh] justify-center text-2xl font-semibold text-red-500/80 text-center">
            <p>Failed to load polls</p>
          </div>
        ) : filteredPolls.length ? (
          filteredPolls?.map((poll) => <PollCard key={poll._id} {...poll} />)
        ) : (
          <div className="flex items-center h-[50dvh] justify-center text-2xl font-semibold text-primary-300 text-center">
            <p>No previous polls exist</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default HistoryPage;
