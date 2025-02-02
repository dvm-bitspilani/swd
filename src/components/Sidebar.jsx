import styles from "../styles/Sidebar.module.css";

export default function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <a href="#" className={styles.menuItem}>
        SWD Home
      </a>
      <a href="#" className={styles.menuItem + " " + styles.active}>
        Overview
      </a>
      <a href="#" className={styles.menuItem}>
        My Profile
      </a>
      <a href="#" className={styles.menuItem}>
        Dues
      </a>
      <a href="#" className={styles.menuItem}>
        Certificates
      </a>
      <a href="#" className={styles.menuItem}>
        Scholarships
      </a>
      <a href="#" className={styles.menuItem}>
        Travel Concessions
      </a>
      <a href="#" className={styles.menuItem}>
        Clubs
      </a>
      <a href="#" className={styles.menuItem}>
        RAF
      </a>
      <a href="#" className={styles.menuItem}>
        Passport and Mess
      </a>
      <a href="#" className={styles.menuItem}>
        Uploading Photo for ID Card
      </a>
      <a href="#" className={styles.menuItem}>
        Duplicate ID Card
      </a>
      <a href="#" className={styles.menuItem}>
        Orientation Program
      </a>
    </nav>
  );
}
