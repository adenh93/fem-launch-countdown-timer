import styles from "./TimerDisplay.module.css";

export interface TimerDisplayProps {
  label: string;
  value: number;
}

export default function TimerDisplay({ label, value }: TimerDisplayProps) {
  const formattedValue = String(value).padStart(2, "0");

  return (
    <div className={styles.flexContainer}>
      <div className={styles.display}>
        <span className={styles.fold} />
        <span className={styles.leftDecoration} />
        {formattedValue}
        <span className={styles.rightDecoration} />
      </div>
      {label}
    </div>
  );
}
