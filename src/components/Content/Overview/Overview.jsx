import styles from "./Overview.module.scss";
import mail from "/svgs/mail.svg";

export default function Overview() {
  return (
    <div className={styles.overview}>
      <section className={styles.contactDetails}>
        <p>Contact Details</p>
        <div className={styles.contactRow}>
          <span>For fee related query:</span>
          <a href="mailto:fees.swd@pilani.bits-pilani.ac.in">
            <img src={mail} alt="mailSVG" />
            <p>fees.swd@pilani.bits-pilani.ac.in</p>
          </a>
        </div>
        <div className={styles.contactRow}>
          <span>For scholarship related query:</span>
          <a href="mailto:scholarship.swd@pilani.bits-pilani.ac.in">
            <img src={mail} alt="mailSVG" />
            <p>scholarship.swd@pilani.bits-pilani.ac.in</p>
          </a>
        </div>
        <div className={styles.contactRow}>
          <span>For any other query:</span>
          <a href="mailto:swd@pilani.bits-pilani.ac.in">
            <img src={mail} alt="mailSVG" />
            <p>swd@pilani.bits-pilani.ac.in</p>
          </a>
        </div>
      </section>

      <section className={styles.notice}>
        <div className={styles.statusIndicator}></div>
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
