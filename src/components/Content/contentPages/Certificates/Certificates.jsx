import styles from "./Certificates.module.scss";

export default function Certificates() {
  return (
    <div className={styles.certificates}>
      <h1 className={styles.pageTitle}>Certificates</h1>
      <div className={styles.certificatesList}>
        <div className={styles.certificate}>
          <div className={styles.certificateDetails}>
            <h2 className={styles.certificateTitle}>Certificate Title</h2>
            <p className={styles.certificateDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt, erat nec ultricies tincidunt, nunc libero ultricies{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
