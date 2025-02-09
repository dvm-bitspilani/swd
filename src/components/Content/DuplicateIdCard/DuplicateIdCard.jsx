import { useState } from "react";
import styles from "./DuplicateIdCard.module.scss";
import Button from "/src/UI/Button/Button";

export default function DuplicateIdCard() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.duplicateIdCard}>
      <div className={styles.formContainer}>
        <form
          className={styles.duplicateForm}
          onSubmit={handleSubmit}
          action=""
        >
          <div className={styles.title}>
            CAUSE FOR APPLYING FOR DUPLICATE ID CARD
          </div>
          <div className={styles.optsContainer}>
            <div className={styles.option}>
              <input type="radio" name="cause" id="opt1" />
              <label htmlFor="opt1">Hostel Change</label>
            </div>
            <div className={styles.option}>
              <input type="radio" name="cause" id="opt2" />
              <label htmlFor="opt2">Lost</label>
            </div>
          </div>
          <div className={styles.btnContainer}>
            <Button className={styles.submitBtn} type="submit">
              Apply
            </Button>
          </div>
        </form>
      </div>

      <div className={styles.info}>
        Notes:
        <ul>
          <li>
            There is an upper limit to the number of duplicate ID cards issued
            in one academic year.
          </li>
          <li>
            The amount of Rs. 200/- will be charged from the mess account per
            lost request.
          </li>
        </ul>
      </div>
    </div>
  );
}
