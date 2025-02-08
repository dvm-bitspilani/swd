import styles from "./TravelComponent.module.scss";
import { bitsSations, outStations } from "./stationList";
import Button from "../../../../../../UI/Button/Button";

export function TravelTextInfo() {
  return (
    <div className={styles.infoText}>
      Please make sure that you apply with the correct information. You will not
      be able to change the information, once applied.
    </div>
  );
}

export default function TravelComponent({ name, onChange, formData }) {
  return (
    <div className={styles.travelComponent}>
      <div className={styles.formGroupContainer}>
        <div className={`${styles.formGroup} ${styles.border}`}>
          <div className={styles.label}>Nearest BITS Station:</div>
          <select
            id="bitsStation"
            className={styles.select}
            onChange={onChange}
            value={formData.bitsSations}
          >
            <option>Select</option>
            {bitsSations.map((station, index) => (
              <option key={index} value={station}>
                {station}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <div className={styles.label}>Nearest {name} Station:</div>
          <select
            id="outStation"
            className={styles.select}
            onChange={onChange}
            value={formData.outStations}
          >
            <option>Select</option>
            {outStations.map((station, index) => (
              <option key={index} value={station}>
                {station}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.checkBoxContainer}>
        <div className={styles.title}>
          <p>Select the concessions you want to avail:</p>
        </div>
        <div className={styles.checkBoxDiv}>
          <input
            type="checkbox"
            name="concession"
            value="FromBits"
            onChange={onChange}
          />
          <div className="label">BITS to {name}</div>
        </div>
        <div className={styles.checkBoxDiv}>
          <input
            type="checkbox"
            name="concession"
            value="ToBits"
            onChange={onChange}
          />
          <div className="label">{name} to BITS</div>
        </div>
      </div>
      <Button type="submit" className={styles.saveBtn}>
        Save
      </Button>
    </div>
  );
}
