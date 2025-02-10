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
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <Sidebar />
          <main className={styles.content}>
            <Navigator url={pathSegments[0]} />
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
