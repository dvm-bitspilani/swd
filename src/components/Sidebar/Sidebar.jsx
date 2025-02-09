import styles from "./Sidebar.module.scss";
import { useState } from "react";
import homeBtn from "/svgs/homeBtn.svg";
import pages from "/src/assets/Pages";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const [activePage, setActivePage] = useState("Overview");
  const handleMenuItemClick = (name) => {
    setActivePage(name);
  };
  return (
    <nav className={styles.sidebar}>
      <div className={styles.homebtn}>
        <img src={homeBtn} alt="Home" className={styles.homebtnIcon} />
        SWD Home
      </div>
      <div className={styles.menu}>
        {pages.map((item, index) => (
          <NavLink
            key={index}
            to={item.url}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? styles.activeMenuItem
                : styles.menuItem
            }
          >
            <img src={item.icon} alt={item.name} className={styles.menuIcon} />
            {item.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
