import React, { useState } from "react";
import styles from "./SportsFacilities.module.scss";
import Button from "../../../../../UI/Button/Button";

const BATCH_TIMINGS = [
  "Morning (6:00 AM - 7:00 AM)",
  "Morning (7:00 AM - 8:00 AM)",
  "Evening (5:00 PM - 6:00 PM)",
  "Evening (6:00 PM - 7:00 PM)",
];

const SportsFacilities = () => {
  const [selectedBatch, setSelectedBatch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Selected batch:", selectedBatch);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SPORTS & GAMES FACILITIES</h1>

      <p>
        Sports is an integral part of our educational system which not only
        helps in physical, mental and social wellbeing of an individual but also
        plays an important role in the optimum debvelopment of personality.
      </p>

      <p>
        Please register and select out of various types of games and sports
        showing your interest in different categories.
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
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SportsFacilities;
