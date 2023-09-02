import { signOut } from 'firebase/auth';
import { useState } from 'react';
import { successToast, errorToast } from '../utilities/toast';
import { BiLogOut } from 'react-icons/bi';
import { CgSpinner } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase.config';
import Button from './ui/button';
import ConfirmationModal from './ui/confirmation-modal';
import { twMerge } from 'tailwind-merge';

const LogoutButton = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      setLoading(true);
      await signOut(auth);
      successToast('Logged out');
      navigate('/auth');
      window.location.reload();
    } catch (error) {
      console.error(error);
      errorToast('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        variant="danger"
        disabled={loading}
        className={twMerge('px-4 py-2', className)}
        onClick={() => setIsModalOpen(true)}>
        {loading ? (
          <>
            <CgSpinner className="text-2xl animate-spin" />
            <span>Logging Out</span>
          </>
        ) : (
          <>
            <BiLogOut className="text-2xl" />
            <span>Logout</span>
          </>
        )}
      </Button>
      <ConfirmationModal
        title={'Logout?'}
        description={'Are you sure you want to log out?'}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        onConfirm={handleLogout}
      />
    </>
  );
};

export default LogoutButton;
