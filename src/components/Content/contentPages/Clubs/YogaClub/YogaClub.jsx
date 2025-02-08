import React, { useState } from "react";
import styles from "./YogaClub.module.scss";
import Button from "../../../../../UI/Button/Button";

const BATCH_TIMINGS = [
  "Morning (6:00 AM - 7:00 AM)",
  "Morning (7:00 AM - 8:00 AM)",
  "Evening (5:00 PM - 6:00 PM)",
  "Evening (6:00 PM - 7:00 PM)",
];

export default function YogaClub() {
  const [selectedBatch, setSelectedBatch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>YOGA CLUB</h1>

      <p>
        Are you a yoga aspirant? Come and join to unfold your mind with healthy
        and conscious living. Rs 750/- shall be charged through mess account for
        students or through salary account for staff members.
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="batch">Batch:</label>
          <select
            id="batch"
            value={selectedBatch}
            onChange={(e) => setSelectedBatch(e.target.value)}
            className={styles.select}
            required
          >
            <option value="" defaultValue disabled>
              Select
            </option>
            {BATCH_TIMINGS.map((batch) => (
              <option key={batch} value={batch}>
                {batch}
              </option>
            ))}
          </select>
        </div>

        <Button type="submit" className={styles.submitButton}>
          Apply
        </Button>
      </form>

      <p className={styles.notAvailable}>
        This service is currently not available
      </p>
    </div>
  );
}
