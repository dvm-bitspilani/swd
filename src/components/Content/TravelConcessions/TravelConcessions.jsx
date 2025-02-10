import styles from "./TravelConcessions.module.scss";
import { Outlet } from "react-router-dom";

export default function TravelConcessions() {
  return (
    <div className={styles.TravelConcessions}>
      <Outlet />
    </div>
  );
}
