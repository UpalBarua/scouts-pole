import { useEffect, useState } from 'react';
import PoleCard from '../components/PoleCard';
import axios from '../api/axios';

const HomePage = () => {
  const [poles, setPoles] = useState([]);

  useEffect(() => {
    const fetchPoles = async () => {
      try {
        const { data } = await axios.get('/pole');
        setPoles(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPoles();
  }, []);

  return (
    <main>
      {poles?.map((pole) => (
        <PoleCard key={pole._id} {...pole} />
      ))}
    </main>
  );
};

export default HomePage;
