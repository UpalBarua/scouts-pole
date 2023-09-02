import { CgSpinner } from 'react-icons/cg';
import PollCard from '../components/poll-card/poll-card';
import usePolls from '../hooks/use-polls';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import ConfirmationModal from '../components/ui/confirmation-modal';

const HomePage = () => {
  const { polls, pollsLoading, pollsError } = usePolls('active');

  return (
    <main className="container grid py-5 md:py-10">
      <h2 className="pb-5 text-2xl font-bold text-center text-white md:text-3xl md:pb-8">
        Active Polls
      </h2>
      <div className="mx-auto space-y-4 max-w-2xl">
        {pollsLoading ? (
          <div className="flex gap-2 items-center h-[40vh] text-xl font-medium">
            <CgSpinner className="text-2xl animate-spin" />
            <p>Loading polls...</p>
          </div>
        ) : pollsError ? (
          <div className="flex gap-2 items-center h-[40vh] text-xl font-medium">
            <p>failed to load polls</p>
          </div>
        ) : (
          polls?.map((poll) => <PollCard key={poll._id} {...poll} />)
        )}
      </div>
    </main>
  );
};

export default HomePage;
