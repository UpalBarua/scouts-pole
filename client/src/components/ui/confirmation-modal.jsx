import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Button from './button';

const ConfirmationModal = ({
  isModalOpen,
  setIsModalOpen,
  title,
  description,
  onConfirm,
}) => {
  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-20"
        onClose={() => setIsModalOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="overflow-y-auto fixed inset-0">
          <div className="flex justify-center items-center p-4 min-h-full text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="overflow-hidden p-5 space-y-1 w-full max-w-md text-left align-middle rounded-lg shadow-xl transition-all transform bg-primary-700">
                <Dialog.Title
                  as="h3"
                  className="text-xl font-bold leading-6 text-white">
                  {title}
                </Dialog.Title>
                <Dialog.Description>{description}</Dialog.Description>
                <div className="flex gap-2 justify-end items-center pt-5">
                  <Button
                    variant="secondary"
                    onClick={() => setIsModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button variant="danger" onClick={onConfirm}>
                    Delete
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ConfirmationModal;
