import Overview from "./contentPages/Overview/Overview";
import MyProfile from "./contentPages/MyProfile/MyProfile";
import Certificates from "./contentPages/Certificates/Certificates";
import Navigator from "../Navigator/Navigator";
import styles from "./Content.module.scss";
import { useContext } from "react";
import { ActivePageContext } from "../../assets/store/activePageContext";
import Scholarships from "./contentPages/Scholarships/Scholarships";

export default function Content() {
  const { activePage } = useContext(ActivePageContext);
  return (
    <main className={styles.content}>
      <Navigator />
      {activePage === "Overview" && <Overview />}
      {activePage === "My Profile" && <MyProfile />}
      {activePage === "Certificates" && <Certificates />}
      {activePage === "Scholarships" && <Scholarships />}
    </main>
  );
}
