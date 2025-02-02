import styles from "../styles/Sidebar.module.scss";
import { useState } from "react";

import overview from "/svgs/overview.svg";
import myProfile from "/svgs/myProfile.svg";
import dues from "/svgs/dues.svg";
import certificates from "/svgs/certificates.svg";
import scholarships from "/svgs/scholarships.svg";
import travelConcessions from "/svgs/travelConcessions.svg";
import clubs from "/svgs/clubs.svg";
import raf from "/svgs/raf.svg";
import passportAndMess from "/svgs/passportAndMess.svg";
import uploadingPhotoForIdCard from "/svgs/uploadingPhotoForIdCard.svg";
import duplicateIdCard from "/svgs/duplicateIdCard.svg";
import orientationProgram from "/svgs/orientationProgram.svg";
import homeBtn from "/svgs/homeBtn.svg";

const menuItems = [
  { icon: overview, name: "Overview" },
  { icon: myProfile, name: "My Profile" },
  { icon: dues, name: "Dues" },
  { icon: certificates, name: "Certificates" },
  { icon: scholarships, name: "Scholarships" },
  { icon: travelConcessions, name: "Travel Concessions" },
  { icon: clubs, name: "Clubs" },
  { icon: raf, name: "RAF" },
  { icon: passportAndMess, name: "Passport & Mess" },
  { icon: uploadingPhotoForIdCard, name: "Uploading Photo for ID Card" },
  { icon: duplicateIdCard, name: "Duplicate ID Card" },
  { icon: orientationProgram, name: "Orientation Program" },
];
export default function Sidebar() {
  const [selectedMenuItem, setSelectedMenuItem] = useState(0);
  const handleMenuItemClick = (index) => {
    setSelectedMenuItem(index);
  };
  return (
    <nav className={styles.sidebar}>
      <div className={styles.homebtn}>
        <img src={homeBtn} alt="Home" />
        SWD Home
      </div>
      <div className={styles.menu}>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={
              index === selectedMenuItem
                ? styles.activeMenuItem
                : styles.menuItem
            }
            onClick={() => {
              handleMenuItemClick(index);
            }}
          >
            <img src={item.icon} alt={item.name} className={styles.menuIcon} />
            {item.name}
          </div>
        ))}
      </div>
    </nav>
  );
}
