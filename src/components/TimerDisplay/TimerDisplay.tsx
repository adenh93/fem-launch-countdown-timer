import { PropsWithChildren } from "react";
import styles from "./TimerDisplay.module.css";

export interface TimerDisplayProps extends PropsWithChildren {
  label: string;
}

export default function TimerDisplay({ label, children }: TimerDisplayProps) {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.display}>
          <span className={styles.leftDecoration} />
          {children}
          <span className={styles.rightDecoration} />
        </div>
      </div>
      {label}
    </div>
  );
}
