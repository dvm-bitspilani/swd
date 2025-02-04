import styles from "./MyProfile.module.scss";
import General from "./myProfileSubPage/General/General";
export default function MyProfile() {
  return (
    <div className={styles.myProfile}>
      <General />
    </div>
  );
}
