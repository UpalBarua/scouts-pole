import { useState, useEffect } from 'react';
import axios from '../api/axios';

const usePolls = () => {
  const [polls, setPolls] = useState([]);
  const [pollsLoading, setPollsLoading] = useState(true);
  const [pollsError, setPollsError] = useState(false);

  useEffect(() => {
    const fetchPolls = async () => {
      try {
        const { data } = await axios.get('/polls');
        setPolls(data);
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
