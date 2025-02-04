import styles from "./Header.module.scss";
import bitsLogo from "/bitsLogo.png";
import dropdownArrow from "/svgs/dropdownArrow.svg";
import icon from "/icon.jpg";

export default function Header({ name = "Hello", id = "2026479273479" }) {
  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <img src={bitsLogo} alt="BITS Pilani Logo" className={styles.logo} />
        <div className={styles.campusDetails}>
          <h1 className={styles.title}>BITS Pilani</h1>
          <p className={styles.campus}>Pilani Campus</p>
        </div>
      </div>
      <h1 className={styles.pageTitle}>Student Welfare Division</h1>
      <div className={styles.userSection}>
        <img src={icon} alt="User" className={styles.userImage} />
        <div className={styles.userDetails}>
          <div className={styles.username}>{name}</div>
          <div className={styles.userId}>
            {id}
            <div className={styles.userMenuDropDown}>
              <img
                src={dropdownArrow}
                alt="Dropdown Arrow"
                className={styles.dropdownArrow}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
