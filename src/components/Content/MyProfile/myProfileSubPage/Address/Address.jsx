import styles from "./Address.module.scss";
import Button from "/src/UI/Button/Button";
import mail from "/svgs/mail.svg";

const address = {
  flat: "Flat No., Building",
  area: "Area Name",
  suburban: "Suburban",
  city: "City",
  state: "State",
  pin: "Pin code",
};

export default function Address() {
  return (
    <div className={styles.address}>
      <div className={styles.addresslines}>
        {Object.keys(address).map((key) => {
          return <div className={styles.addressLine}>{address[key]}</div>;
        })}
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
