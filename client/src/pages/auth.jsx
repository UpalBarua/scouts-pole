import { useState } from 'react';
import undraw from '../assets/signIn.svg';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleAuth } from '../firebase/firebase.config';
import axios from '../api/axios';

const AuthPage = () => {
  const [authError, setAuthError] = useState('');

  const handleAuth = async () => {
    try {
      const { user } = await signInWithPopup(auth, googleAuth);

      await axios.post(`/user/${user?.email}`, {
        name: user?.displayName,
        email: user?.email,
        role: 'user',
      });
    } catch (error) {
      console.error(error);
      setAuthError(error.message);
    }
  };

  return (
    <div className="flex justify-center">
      <div>
        <img src={undraw} className="w-80"></img>
        <div className="flex justify-center">
          <p>{authError}</p>
          <button
            onClick={handleAuth}
            className="px-6 py-3 mt-4 font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:from-purple-700 hover:to-pink-700 hover:scale-105">
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
