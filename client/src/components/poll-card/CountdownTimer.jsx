import { useState, useEffect } from "react";

const CountdownTimer = ({ expiresAt }) => {
  const formatRemainingTime = (expiresAt) => {
    const currentDate = new Date();
    const expirationDate = new Date(expiresAt);

    const timeDiff = expirationDate - currentDate;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    return `${days} days ${hours} hours ${minutes} minutes`;
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

  return <span>{remainingTime}</span>;
};

export default CountdownTimer;
