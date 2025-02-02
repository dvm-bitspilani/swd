import styles from "../styles/Content.module.scss"

export default function Content() {
  return (
    <main className={styles.content}>
      <section className={styles.contactDetails}>
        <h2>Contact Details</h2>
        <div className={styles.contactRow}>
          <span>For fee related query:</span>
          <a href="mailto:fees.swd@pilani.bits-pilani.ac.in">fees.swd@pilani.bits-pilani.ac.in</a>
        </div>
        <div className={styles.contactRow}>
          <span>For scholarship related query:</span>
          <a href="mailto:scholarship.swd@pilani.bits-pilani.ac.in">scholarship.swd@pilani.bits-pilani.ac.in</a>
        </div>
        <div className={styles.contactRow}>
          <span>For any other query:</span>
          <a href="mailto:swd@pilani.bits-pilani.ac.in">swd@pilani.bits-pilani.ac.in</a>
        </div>
      </section>

      <section className={styles.notice}>
        <h3>Dear Student,</h3>
        <p>
          You have not been awarded Merit or Merit-cum-Need (MCN) Scholarship for the First Semester 2024-2025 due to:
        </p>
        <p className={styles.notEligible}>'Not eligible or not applied.'</p>
      </section>
    </main>
  )
}

