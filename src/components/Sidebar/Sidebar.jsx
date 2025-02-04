import styles from "./Sidebar.module.scss";
import { useState } from "react";

import homeBtn from "/svgs/homeBtn.svg";
import menuItems from "/src/assets/Pages";

export default function Sidebar() {
  const [selectedMenuItem, setSelectedMenuItem] = useState(menuItems[0].name);
  const handleMenuItemClick = (name) => {
    setSelectedMenuItem(name);
  };
  return (
    <nav className={styles.sidebar}>
      <div className={styles.homebtn}>
        <img src={homeBtn} alt="Home" className={styles.homebtnIcon} />
        SWD Home
      </div>
      <div className={styles.menu}>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={
              item.name === selectedMenuItem
                ? styles.activeMenuItem
                : styles.menuItem
            }
            onClick={() => {
              handleMenuItemClick(item.name);
            }}
          >
            <img src={item.icon} alt={item.name} className={styles.menuIcon} />
            {item.name}
          </div>
        ))}
      </div>
    </nav>
  );
}
