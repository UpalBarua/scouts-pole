import { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleAuth } from '../firebase/firebase.config';
import authIllustration from '../assets/auth-illustration.svg';
import axios from '../api/axios';
import { FcGoogle } from 'react-icons/fc';
import { CgSpinner } from 'react-icons/cg';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import createUser from '../utilities/createUser';

const AuthPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleAuth = async () => {
    try {
      setIsLoading(true);

      const { user } = await signInWithPopup(auth, googleAuth);
      await createUser(user?.displayName, user?.email);

      toast.success('Logged in successfully');
      navigate('/');
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex justify-center items-center h-[80dvh]">
      <div className="flex flex-col gap-6 items-center sm:gap-8 sm:flex-row md:gap-14">
        <img className="w-48 sm:flex-1" src={authIllustration} />
        <div className="flex flex-col gap-2 items-center text-center md:gap-3 sm:flex-1 sm:items-start sm:text-start">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Welcome To Scouts<span className="text-accent-500">pole</span>!
          </h2>
          <p className="w-[80%] pb-3 text-primary-200 md:text-lg">
            Sign in using your Google account and join the decision-making
            process
          </p>
          <button
            className="flex gap-2 items-center px-5 py-3 font-medium rounded-lg shadow-sm bg-primary-700 hover:bg-primary-900"
            disabled={isLoading}
            onClick={handleAuth}>
            {isLoading ? (
              <>
                <CgSpinner className="text-xl animate-spin text-accent-500" />
                <span>Please Wait</span>
              </>
            ) : (
              <>
                <FcGoogle className="text-xl" />
                <span>Continue With Google</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AuthPage;
