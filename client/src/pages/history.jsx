import { BiSearch } from 'react-icons/bi';
import usePolls from '../hooks/use-polls';
import { CgSpinner } from 'react-icons/cg';
import PollCard from '../components/poll-card/poll-card';
import { useEffect, useState } from 'react';

const HistoryPage = () => {
  const { polls, pollsLoading, pollsError } = usePolls('inactive');

  const [filterString, setFilterString] = useState('');
  const [filteredPolls, setFilteredPolls] = useState({});

  useEffect(() => {
    const result = polls.filter(
      (poll) =>
        poll.title.includes(filterString) ||
        poll.description.includes(filterString) ||
        poll.options
          .map((option) => option.option.includes(filterString))
          .includes(true)
    );

    setFilteredPolls(result);
  }, [filterString, polls]);

  return (
    <main className="container flex flex-col items-center py-5 max-w-7xl md:py-10">
      <h2 className="pb-5 text-2xl font-bold text-center text-white md:text-3xl md:pb-8 font-secondary">
        Poll History
      </h2>
      <form className="flex items-center px-3 py-1 mb-5 w-full max-w-lg text-lg rounded-lg border shadow-sm md:py-2 bg-primary-700 border-primary-600 md:px-5">
        <BiSearch className="text-xl" />
        <input
          className="w-full bg-transparent border-0 outline-none focus-visible:ring-0"
          type="text"
          placeholder="Search old polls"
          onChange={(e) => setFilterString(e.target.value)}
          value={filterString}
        />
      </form>
      <div className="mx-auto space-y-4 max-w-2xl">
        {pollsLoading ? (
          <div className="flex gap-2 items-center h-[40vh] text-xl font-medium">
            <CgSpinner className="text-2xl animate-spin" />
            <p>loading polls...</p>
          </div>
        ) : pollsError ? (
          <div className="flex gap-2 items-center h-[40vh] text-xl font-medium">
            <p>failed to load polls</p>
          </div>
        ) : (
          filteredPolls?.map((poll) => <PollCard key={poll._id} {...poll} />)
        )}
      </div>
    </main>
  );
};

export default HistoryPage;
