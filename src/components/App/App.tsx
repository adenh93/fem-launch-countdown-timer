import SocialIcons from "@app/components/SocialIcons";
import patternHills from "@app/assets/images/pattern-hills.svg";
import styles from "./App.module.css";

function App() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h1>We're launching soon</h1>
        <h1>Timer</h1>
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

export default App;
