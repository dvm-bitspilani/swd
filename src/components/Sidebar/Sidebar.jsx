import styles from "./Sidebar.module.scss";
import { useState } from "react";
import homeBtn from "/svgs/homeBtn.svg";
import pages from "/src/assets/Pages";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };
  return (
    <nav className={styles.sidebar}>
      <div className={styles.homebtn}>
        <img src={homeBtn} alt="Home" className={styles.homebtnIcon} />
        SWD Home
      </div>
      <div className={styles.hamburgerContainer}>
        <div
          className={isClicked ? styles.clicked : styles.hamburger}
          onClick={handleClick}
        >
          <div className={styles.linesbars}>
            <div className={`${styles.line} ${styles.line1}`}></div>
            <div className={`${styles.line} ${styles.line2}`}></div>
            <div className={`${styles.line} ${styles.line3}`}></div>
          </div>
        </div>
      </div>
      <div className={styles.menu}>
        {pages.map((item, index) => (
          <NavLink
            key={index}
            to={item.url}
            className={({ isActive, isPending }) =>
              isPending
                ? styles.pending
                : isActive
                ? styles.activeMenuItem
                : styles.menuItem
            }
          >
            <img src={item.icon} alt={item.name} className={styles.menuIcon} />
            <div className={styles.itemName}>{item.name}</div>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
