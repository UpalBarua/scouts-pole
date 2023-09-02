import { format } from 'date-fns';
import { useEffect, useState } from 'react';

const CountdownTimer = ({ expiresAt, onExpire, isActive, className }) => {
  const formatRemainingTime = (expiresAt) => {
    const currentDate = new Date();
    const expirationDate = new Date(expiresAt);

    if (!isActive) {
      return `Expired on ${format(expirationDate, 'do MMMM yyyy hh:mm a')}`;
    }

    const timeDiff = expirationDate - currentDate;

    if (timeDiff <= 0) {
      onExpire();
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    return `${days} days ${hours} hours ${minutes} minutes remaining`;
  };

  const [remainingTime, setRemainingTime] = useState(
    formatRemainingTime(expiresAt)
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(formatRemainingTime(expiresAt));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [expiresAt]);

  return <p className={className}>{remainingTime}</p>;
};

export default CountdownTimer;
