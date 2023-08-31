import { useEffect, useState } from 'react';
import axios from '../api/axios';
import { useAuth } from '../contexts/auth-context';

const useUser = () => {
  const [userData, setUserData] = useState({});
  const [userLoading, setUserLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const { user } = useAuth();

  useEffect(() => {
    const fetchUer = async () => {
      if (!user?.email) return;

      try {
        setUserLoading(true);
        const { data } = await axios.get(`/user/${user?.email}`);
        setUserData(data);
      } catch (error) {
        // console.error(error);
        setIsError(true);
      } finally {
        setUserLoading(false);
      }
    };

    fetchUer();
  }, [user]);

  return {
    userData,
    userLoading,
    isError,
  };
};

export default useUser;
