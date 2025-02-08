import styles from "./TravelConcessions.module.scss";
import Home from "./travelConcessionsSubPages/Home/Home";
import PSI from "./travelConcessionsSubPages/PSI/PSI";
import PSII from "./travelConcessionsSubPages/PSII/PSII";

export default function TravelConcessions() {
  return (
    <div className={styles.TravelConcessions}>
      {/* <Home /> */}
      {/* <PSI /> */}
      <PSII />
    </div>
  );
}
