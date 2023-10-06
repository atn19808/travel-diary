import { Link } from "react-router-dom";

import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link>
      <img
        src="/src/assets/logo.png"
        alt="TravelDiary logo"
        className={styles.logo}
      />
    </Link>
  );
}

export default Logo;
