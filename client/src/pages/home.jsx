import { useEffect, useState } from 'react';
import axios from '../api/axios';
import useUser from '../hooks/use-user';
import { CgSpinner } from 'react-icons/cg';
import PoleCard from '../components/pole-card/pole-card';

const HomePage = () => {
  const [poles, setPoles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { user } = useUser();

  useEffect(() => {
    const fetchPoles = async () => {
      try {
        setIsLoading(true);

        const { data } = await axios.get('/pole');
        setPoles(data);
        setIsError(false);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPoles();
  }, []);

  return (
    <main className="container grid">

      <h2 className="pb-5 my-5 text-2xl font-bold text-center">Active Poles</h2>
      <div className="max-w-2xl mx-auto space-y-4">
        {isLoading ? (
          <div className="flex gap-2 items-center h-[40vh] text-xl font-medium">
            <CgSpinner className="text-2xl animate-spin" />
            <p>loading poles...</p>
          </div>
        ) : isError ? (
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
