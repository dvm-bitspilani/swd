import styles from "./Navigator.module.scss";
import globe from "/svgs/globe.svg";
import forwardArrow from "/svgs/forwardArrow.svg";


export default function Navigator() {
  
  return (
    <div className={styles.navigator}>
      <a href="www.google.com">
        <img src={globe} alt="globeSVG" />
        SWD
      </a>
      <img
        src={forwardArrow}
        alt="forwardArrowSVG"
        className={styles.forwardArrowSVG}
      />
      <p>Overview</p>
    </div>
  );
}
