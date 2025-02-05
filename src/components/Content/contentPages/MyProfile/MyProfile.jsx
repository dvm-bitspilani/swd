import styles from "./MyProfile.module.scss";
import General from "./myProfileSubPages/General/General";
import Address from "./myProfileSubPages/Address/Address";
import Academics from "./myProfileSubPages/Academics/Academics";
export default function MyProfile() {
  return (
    <div className={styles.myProfile}>
      {/* <General /> */}
      {/* <Address /> */}
      <Academics />
    </div>
  );
}
