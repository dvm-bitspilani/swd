import styles from "./MyProfile.module.scss";
import { Outlet } from "react-router-dom";

export default function MyProfile() {
  return (
    <div className={styles.myProfile}>
      <Outlet />
    </div>
  );
}
