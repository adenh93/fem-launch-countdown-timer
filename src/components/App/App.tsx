import dayjs from "dayjs";
import SocialIcons from "@app/components/SocialIcons";
import patternHills from "@app/assets/images/pattern-hills.svg";
import CountdownTimer from "@app/components/CountdownTimer";
import styles from "./App.module.css";

const endDate = dayjs()
  .add(8, "days")
  .add(23, "hours")
  .add(55, "minutes")
  .add(41, "seconds");

export default function App() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h1>We're launching soon</h1>
        <CountdownTimer endDate={endDate} />
      </div>
      <img
        className={styles.parallaxImg}
        src={patternHills}
        alt="Decorative illustration"
      />
      <footer className={styles.footer}>
        <SocialIcons />
      </footer>
    </main>
  );
}
