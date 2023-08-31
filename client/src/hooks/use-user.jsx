import { useEffect, useState } from 'react';
import axios from '../api/axios';
import { useAuth } from '../contexts/auth-context';

const useUser = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const {
    user: { email },
  } = useAuth();

  useEffect(() => {
    const fetchUer = async () => {
      if (!email) {
        return setIsLoading(false);
      }

      try {
        const { data } = await axios.get(`/user/${email}`);
        setUser(data);
      } catch (error) {
        // console.error(error);
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
