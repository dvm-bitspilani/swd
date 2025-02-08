import Overview from "./contentPages/Overview/Overview";
import MyProfile from "./contentPages/MyProfile/MyProfile";
import Certificates from "./contentPages/Certificates/Certificates";
import Scholarships from "./contentPages/Scholarships/Scholarships";
import Dues from "./contentPages/Dues/Dues";
import Clubs from "./contentPages/Clubs/Clubs";
import TravelConcessions from "./contentPages/TravelConcessions/TravelConcessions";
import UploadPhotoForIdCard from "./contentPages/UploadPhotoforIdCard/UploadPhotoForIdCard";
import DuplicateIdCard from "./contentPages/DuplicateIdCard/DuplicateIdCard";
import Navigator from "../Navigator/Navigator";
import RAF from "./contentPages/RAF/RAF";
import PassportAndMess from "./contentPages/Passport&Mess/Passport&Mess";
import styles from "./Content.module.scss";
import { useContext } from "react";
import { ActivePageContext } from "../../assets/store/activePageContext";

export default function Content() {
  const { activePage } = useContext(ActivePageContext);
  return (
    <main className={styles.content}>
      <Navigator />
      {activePage === "Overview" && <Overview />}
      {activePage === "My Profile" && <MyProfile />}
      {activePage === "Certificates" && <Certificates />}
      {activePage === "Scholarships" && <Scholarships />}
      {activePage === "Dues" && <Dues />}
      {activePage === "Clubs" && <Clubs />}
      {activePage === "Travel Concessions" && <TravelConcessions />}
      {activePage === "Uploading Photo for ID Card" && <UploadPhotoForIdCard />}
      {activePage === "Duplicate ID Card" && <DuplicateIdCard />}
      {activePage === "RAF" && <RAF />}
      {activePage === "Passport & Mess" && <PassportAndMess />}
    </main>
  );
}
