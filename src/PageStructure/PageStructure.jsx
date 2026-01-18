import styles from "./PageStructure.module.scss";
import Header from "/src/components/Header/Header";
import Sidebar from "/src/components/Sidebar/Sidebar";
import Navigator from "../components/Navigator/Navigator";
import { Outlet, useLocation } from "react-router-dom";

export default function PageStructure() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <div className={styles.mainContent}>
        <Sidebar />
        <main className={styles.content}>
          <div className={styles.headerContainer}>
            <Navigator url={pathSegments[0]} />
          </div>
          <div className={styles.scrollContainer}>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
