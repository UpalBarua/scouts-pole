import axios from '../api/axios';

const createUser = async (name, email) => {
  try {
    await axios.post('/user', {
      name,
      email,
      role: 'user',
    });
  } catch (error) {
    if (error.response.status !== 409) {
      console.error(error);
      throw error;
    }
  }
};

export default createUser;
