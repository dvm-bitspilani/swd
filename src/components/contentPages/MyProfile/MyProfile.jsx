import styles from "./MyProfile.module.scss";
import General from "./myProfileSubPage/General/General";
import Address from "./myProfileSubPage/Address/Address";
import Academics from "./myProfileSubPage/Academics/Academics";
export default function MyProfile() {
  return (
    <div className={styles.myProfile}>
      {/* <General /> */}
      {/* <Address /> */}
      <Academics />
    </div>
  );
}
