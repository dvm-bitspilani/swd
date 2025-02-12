import styles from "./Header.module.scss";
import bitsLogo from "/bitsLogo.png";
import dropdownArrow from "/svgs/dropdownArrow.svg";
import triangle from "/svgs/triangle.svg";
import power from "/svgs/power.svg";
import icon from "/icon.jpg";
import { useState } from "react";

export default function Header({
  name = "Chita swamy",
  id = "2024B3A70921P",
}) {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

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
          <div
            className={styles.userId}
            onClick={() => {
              setIsDropdownActive((prev) => !prev);
            }}
          >
            {id}
            <div className={styles.userMenuDropDown}>
              <img
                src={dropdownArrow}
                alt="Dropdown Arrow"
                className={
                  isDropdownActive
                    ? styles.activeDropdownArrow
                    : styles.dropdownArrow
                }
              />
            </div>
          </div>
          <div
            className={
              isDropdownActive
                ? `${styles.hoverInfo} ${styles.activeHover}`
                : styles.hoverInfo
            }
          >
            <img className={styles.arrow} src={triangle} alt="trinagle" />
            <div className={styles.msg}>
              <img className={styles.power} src={power} alt="logout" />
              Logout
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
