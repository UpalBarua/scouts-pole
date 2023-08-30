import { useState, useEffect } from 'react';
import axios from '../api/axios';

const usePoles = () => {
  const [poles, setPoles] = useState([]);
  const [polesLoading, setPolesLoading] = useState(true);
  const [polesError, setPolesError] = useState(false);

  useEffect(() => {
    const fetchPoles = async () => {
      try {
        const { data } = await axios.get('/pole');
        setPoles(data);
        setPolesError(false);
      } catch (error) {
        console.error(error);
        setPolesError(true);
      } finally {
        setPolesLoading(false);
      }
    };

    fetchPoles();
  }, []);

  return {
    poles,
    polesLoading,
    polesError,
  };
};

export default usePoles;
