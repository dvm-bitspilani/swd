import styles from "./Address.module.scss";
import Button from "/src/UI/Button/Button";
import mail from "/svgs/mail.svg";

export default function Address() {
  const address = {
    flat: "Flat No., Building",
    area: "Area Name",
    suburban: "Suburban",
    city: "City",
    state: "State",
    pin: "Pin code",
  };

  return (
    <div className={styles.address}>
      <div className={styles.addresslines}>
        <div className={styles.addressLine}>{address.flat}</div>
        <div className={styles.addressLine}>{address.area}</div>
        <div className={styles.addressLine}>{address.suburban}</div>
        <div className={styles.addressLine}>{address.city}</div>
        <div className={styles.addressLine}>{address.state}</div>
        <div className={styles.addressLine}>{address.pin}</div>
      </div>
      <Button>Change Address</Button>
      <div className={styles.addressChangeMail}>
        <span className={styles.forAddChange}>For address change: </span>
        <span className={styles.mailId}>
          <span className={styles.pleaseMail}>Please mail</span>
          <a href="#" className={styles.mailLink}>
            <img src={mail} className="mailIcon" alt="mail" />
            swdcomputerlab@gmail.com
          </a>
        </span>
      </div>
    </div>
  );
}
