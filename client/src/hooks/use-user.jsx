import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/auth-context';
import axios from '../api/axios';

const useUser = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    user: { email },
  } = useAuth();

  useEffect(() => {
    const fetchUer = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/user/${email}`);
        setUser(data);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUer();
  }, [email]);

  return {
    user,
    userLoading: isLoading,
    userError: isError,
  };
};

export default useUser;