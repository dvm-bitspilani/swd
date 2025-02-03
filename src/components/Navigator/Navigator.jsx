import styles from "./Navigator.module.scss";
import globe from "/svgs/Globe.svg";
import forwardArrow from "/svgs/forwardArrow.svg";

export default function Navigator() {
  return (
    <nav className={styles.navigator}>
      <a href="#">
        <img src={globe} alt="globeSVG"/>
        SWD
      </a>
      <img
        src={forwardArrow}
        alt="forwardArrowSVG"
        className={styles.forwardArrowSVG}
      />
      <p>Overview</p>
    </nav>
  );
}
