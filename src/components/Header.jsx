import styles from "../styles/Header.module.scss";
import bitsLogo from "/bitsLogo.png";
import dropdownArrow from "/svgs/dropdownArrow.svg";
import icon from "/icon.jpg";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <img
          src={bitsLogo}
          alt="BITS Pilani Logo"
          className={styles.logo}
        />
        <div className={styles.campusDetails}>
          <h1 className={styles.title}>BITS Pilani</h1>
          <p className={styles.campus}>Pilani Campus</p>
        </div>
      </div>
      <h1 className={styles.title}>Student Welfare Division</h1>
      <div className={styles.userSection}>
        <img
          src={icon}
          alt="User"
          className={styles.userImage}
        />
        <div className={styles.userDetails}>
          <div className={styles.username}>Chill Guy Ramesh</div>
          <div className={styles.userId}>2024CHGYXXXXP
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
