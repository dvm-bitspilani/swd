import styles from "./Overview.module.scss";
import mail from "/public/svgs/Mail.svg";

export default function Overview() {
  return (
    <div className={styles.overview}>
      <section className={styles.contactDetails}>
        <p>Contact Details</p>
        <div className={styles.contactRow}>
          <span>For fee related query:</span>
          <a href="mailto:fees.swd@pilani.bits-pilani.ac.in">
            <img src={mail} alt="mailSVG" />
            fees.swd@pilani.bits-pilani.ac.in
          </a>
        </div>
        <div className={styles.contactRow}>
          <span>For scholarship related query:</span>
          <a href="mailto:scholarship.swd@pilani.bits-pilani.ac.in">
            <img src={mail} alt="mailSVG" />
            scholarship.swd@pilani.bits-pilani.ac.in
          </a>
        </div>
        <div className={styles.contactRow}>
          <span>For any other query:</span>
          <a href="mailto:swd@pilani.bits-pilani.ac.in">
            <img src={mail} alt="mailSVG" />
            swd@pilani.bits-pilani.ac.in
          </a>
        </div>
      </section>

      <section className={styles.notice}>
        <p>Dear Student,</p>
        <p>
          You have not been awarded Merit or Merit-cum-Need (MCN) Scholarship
          for the First Semester 2024-2025 due to:
        </p>
        <p className={styles.notEligible}>'Not eligible or not applied.'</p>
      </section>
    </div>
  );
}
