import { useEffect, useState } from 'react';
import axios from '../api/axios';

const usePolls = (pollType) => {
  const [polls, setPolls] = useState([]);
  const [pollsLoading, setPollsLoading] = useState(true);
  const [pollsError, setPollsError] = useState(false);

  useEffect(() => {
    const fetchPolls = async () => {
      try {
        const { data } = await axios.get('/polls');

        const filteredPolls =
          pollType === 'active'
            ? data.filter((poll) => poll.isActive)
            : pollType === 'inactive'
            ? data.filter((poll) => !poll.isActive)
            : data;

        setPolls(filteredPolls);
        setPollsError(false);
      } catch (error) {
        console.error(error);
        setPollsError(true);
      } finally {
        setPollsLoading(false);
      }
    };

    fetchPolls();
  }, []);

  return {
    polls,
    setPolls,
    pollsLoading,
    pollsError,
  };
};

export default usePolls;
