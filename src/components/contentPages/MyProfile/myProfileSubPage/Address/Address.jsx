import styles from "./Address.module.scss";
import Button from "/src/UI/Button/Button";
import mail from "/svgs/mail.svg";

export default function Address() {
  return (
    <div className={styles.address}>
      <div className={styles.addresslines}>
        <div className={styles.addressLine}>Flat No., Building</div>
        <div className={styles.addressLine}>Area Name</div>
        <div className={styles.addressLine}>Suburban</div>
        <div className={styles.addressLine}>City</div>
        <div className={styles.addressLine}>State</div>
        <div className={styles.addressLine}>Pin code</div>
      </div>
      <Button>Change Address</Button>
      <div className={styles.addressChangeMail}>
        <span className={styles.forAddChange}>For address change: </span>
        <span className={styles.mailId}>
          Please mail
          <a href="#" className={styles.mailLink}>
            <img src={mail} className="mailIcon" alt="mail" />
            swdcomputerlab@gmail.com
          </a>
        </span>
      </div>
    </div>
  );
}
