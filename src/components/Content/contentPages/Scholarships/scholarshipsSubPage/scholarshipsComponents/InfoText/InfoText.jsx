import styles from "./InfoText.module.scss";

export default function InfoText() {
  return (
    <div className={styles.infoText}>
      <p className={styles.warning}>
        Please make sure that the personal details displayed are correct and
        upto date, else your application will be discarded.
      </p>
      <p>
        To update the personal details, please modify the details under{" "}
        <a href="#">My Profile</a>.
      </p>
      <p>
        Please select the appropriate Income Certificate type for your mother
        and father.
      </p>
    </div>
  );
}
