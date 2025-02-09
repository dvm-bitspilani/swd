import styles from "./Scholarships.module.scss";
import { Outlet } from "react-router-dom";

export default function Scholarships() {
  return (
    <div className={styles.scholarships}>
      <Outlet />
    </div>
  );
}
