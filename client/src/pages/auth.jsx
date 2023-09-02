import { signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { CgSpinner } from 'react-icons/cg';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import authIllustration from '../assets/auth-illustration.svg';
import { auth, googleAuth } from '../firebase/firebase.config';
import createUser from '../utilities/createUser';
import { successToast } from '../utilities/toast';

const AuthPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleAuth = async () => {
    try {
      setIsLoading(true);
      const { user } = await signInWithPopup(auth, googleAuth);
      console.log(user);
      await createUser(user?.displayName, user?.email);
      successToast('Logged in successfully', {
        style: {
          backgroundColor: '#32313f',
        },
      });
      navigate('/');
    } catch (error) {
      console.error(error);
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
            Welcome To Scouts<span className="text-accent-500">poll</span>!
          </h2>
          <p className="w-[80%] pb-3 text-primary-200 md:text-lg">
            Sign in using your Google account and join the decision-making
            process
          </p>
          <button
            className="flex gap-2 items-center px-5 py-3 font-medium rounded-lg border shadow-sm bg-primary-700 hover:bg-primary-900 border-primary-600"
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
