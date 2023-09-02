import { signOut } from 'firebase/auth';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { BiLogOut } from 'react-icons/bi';
import { CgSpinner } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase.config';
import ConfirmationModal from './ui/confirmation-modal';
import Button from './ui/button';

const LogoutButton = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      setLoading(true);
      await signOut(auth);
      toast.success('Logged out');
      navigate('/auth');
      window.location.reload();
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        variant="danger"
        disabled={loading}
        className={'px-4 py-2'}
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
