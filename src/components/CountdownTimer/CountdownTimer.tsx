import TimerDisplay from "@app/components/TimerDisplay";
import styles from "./CountdownTimer.module.css";

export default function CountdownTimer() {
  return (
    <div className={styles.container}>
      <TimerDisplay label="Days">08</TimerDisplay>
      <TimerDisplay label="Hours">23</TimerDisplay>
      <TimerDisplay label="Minutes">55</TimerDisplay>
      <TimerDisplay label="Seconds">41</TimerDisplay>
    </div>
  );
}
