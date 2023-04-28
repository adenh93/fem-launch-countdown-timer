import {
  IconFacebook,
  IconInstagram,
  IconPinterest,
} from "@app/components/Icons";
import styles from "./SocialIcons.module.css";

export default function SocialIcons() {
  return (
    <div className={styles.flexContainer}>
      <a href="#">
        <IconFacebook />
      </a>
      <a href="#">
        <IconPinterest />
      </a>
      <a href="#">
        <IconInstagram />
      </a>
    </div>
  );
}
