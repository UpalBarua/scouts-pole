import { signOut } from 'firebase/auth';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { BiLogOut } from 'react-icons/bi';
import { CgSpinner } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase.config';
import Button from './ui/button';

const LogoutButton = ({ className }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      setLoading(true);
      await signOut(auth);
      toast.success('Logged out');
      navigate('/auth');
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant="danger"
      disabled={loading}
      className={'px-4 py-2'}
      onClick={handleLogout}>
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
  );
};

export default LogoutButton;
