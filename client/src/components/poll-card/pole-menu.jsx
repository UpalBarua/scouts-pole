import { Fragment, useState } from 'react';
import { Menu } from '@headlessui/react';
import { Transition } from '@headlessui/react';
import { BiMenu } from 'react-icons/bi';
import ConfirmationModal from '../ui/confirmation-modal';
import { toast } from 'react-hot-toast';
import axios from '../../api/axios';
import { Link } from 'react-router-dom';

const PollMenu = ({ pollId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = async (pollId) => {
    try {
      await axios.delete(`/polls/${pollId}`);
      window.location.reload();
      toast.success('Poll deleted');
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
    } finally {
      setIsModalOpen(false);
    }
  };

  return (
    <Menu as="div" className="inline-block relative text-left">
      <Menu.Button className="p-1.5 text-3xl rounded-md bg-primary-900 border border-primary-700 hover:bg-primary-950 hover:border-primary-600 shadow-sm">
        <BiMenu />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="absolute right-0 px-2 py-4 mt-1 space-y-1 w-40 rounded-md ring-1 ring-black ring-opacity-5 shadow-lg origin-top-right bg-primary-800 focus:outline-none">
          <Menu.Item
            as={'button'}
            onClick={() => setIsModalOpen(true)}
            className="block px-3 py-2 rounded-md hover:bg-primary-700 hover:text-white">
            Delete Poll
          </Menu.Item>
          <Menu.Item
            as={Link}
            to={`/edit-poll/${pollId}`}
            className="block px-3 py-2 rounded-md hover:bg-primary-700 hover:text-white">
            Edit Poll
          </Menu.Item>
        </Menu.Items>
      </Transition>
      <ConfirmationModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        title={'Delete this poll'}
        description={"this poll will be deleted and you can't recover it"}
        onConfirm={() => handleDelete(pollId)}
      />
    </Menu>
  );
};
export default PollMenu;
