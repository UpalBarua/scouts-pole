import { toast } from 'react-hot-toast';

export const successToast = (message) => {
  toast.success(message, {
    style: {
      backgroundColor: '#32313f',
      color: '#d4d1db',
      padding: '0.75rem',
    },
  });
};

export const errorToast = (message) => {
  toast.error(message, {
    style: {
      backgroundColor: '#32313f',
      color: '#d4d1db',
      padding: '0.75rem',
    },
  });
};
