import { useEffect, useState } from 'react';
import axios from '../api/axios';
import PoleCard from '../components/PoleCard';

const HomePage = () => {
  const [poles, setPoles] = useState([]);
  console.log(poles);

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
