import { CgSpinner } from 'react-icons/cg';
import PoleCard from '../components/pole-card/pole-card';
import usePoles from '../hooks/use-poles';

const HomePage = () => {
  const { poles, polesLoading, polesError } = usePoles();

  return (
    <main className="container grid py-5 md:py-10">
      <h2 className="pb-5 text-2xl font-bold text-center text-white md:text-3xl md:pb-8">
        Active Poles
      </h2>
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
          poles?.map((pole) => <PoleCard key={pole._id} {...pole} />)
        )}
      </div>
    </main>
  );
};

export default HomePage;
