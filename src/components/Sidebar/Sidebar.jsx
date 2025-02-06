import styles from "./Sidebar.module.scss";
import { useContext} from "react";
import { ActivePageContext } from "../../assets/store/activePageContext";
import homeBtn from "/svgs/homeBtn.svg";
import pages from "/src/assets/Pages";

export default function Sidebar() {
  const { activePage, setActivePage } = useContext(ActivePageContext);
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
          <div
            key={index}
            className={
              item.name === activePage
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
