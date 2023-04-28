import { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const intervalStep = 1_000;

const calculateDifference = (endDate: Dayjs): number => {
  const startDate = dayjs();
  const difference = endDate.unix() - startDate.unix();
  return difference >= 0 ? difference : 0;
};

const calculateDuration = (difference: number): TimeLeft => {
  const duration = dayjs.duration(
    difference * intervalStep - intervalStep,
    "milliseconds"
  );

  return {
    days: duration.days(),
    hours: duration.hours(),
    minutes: duration.minutes(),
    seconds: duration.seconds(),
  };
};

const getDifferenceAndTimeLeft = (endDate: Dayjs): [number, TimeLeft] => {
  const difference = calculateDifference(endDate);
  return [difference, calculateDuration(difference)];
};

export default function useCountdown(endDate: Dayjs): TimeLeft {
  const [timeLeft, setTimeLeft] = useState(
    () => getDifferenceAndTimeLeft(endDate)[1]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const [difference, timeLeft] = getDifferenceAndTimeLeft(endDate);
      setTimeLeft(timeLeft);

      if (difference === 1) {
        clearInterval(interval);
      }
    }, intervalStep);

    return () => {
      clearInterval(interval);
    };
  }, [endDate]);

  return timeLeft;
}
