import { Dayjs } from "dayjs";
import TimerDisplay from "@app/components/TimerDisplay";
import useCountdown from "@app/hooks/useCountdown";
import styles from "./CountdownTimer.module.css";

export interface CountdownTimerProps {
  endDate: Dayjs;
}

export default function CountdownTimer({ endDate }: CountdownTimerProps) {
  const { days, hours, minutes, seconds } = useCountdown(endDate);

  return (
    <div className={styles.container}>
      <TimerDisplay label="Days" value={days} />
      <TimerDisplay label="Hours" value={hours} />
      <TimerDisplay label="Minutes" value={minutes} />
      <TimerDisplay label="Seconds" value={seconds} />
    </div>
  );
}
