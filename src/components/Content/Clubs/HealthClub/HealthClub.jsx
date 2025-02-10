import React, { useState } from "react";
import styles from "./HealthClub.module.scss";
import Button from "/src/UI/Button/Button";

const BATCH_TIMINGS = [
  { id: "M8823", time: "8:15 - 9:00 AM", days: "M/W/F", forFemale: true },
  { id: "T9523", time: "8:15 - 9:00 AM", days: "T/TH/S", forFemale: true },
  { id: "M1023", time: "10:00 - 10:45 AM", days: "M/W/F", forFemale: false },
  { id: "T1523", time: "3:00 - 3:45 PM", days: "T/TH/S", forFemale: false },
];

const SPORTS_CATEGORIES = [
  { id: "indoor", name: "Indoor Sports" },
  { id: "outdoor", name: "Outdoor Sports" },
];

const ACTIVITIES = [
  { id: "gym", name: "Gym" },
  { id: "powerLifting", name: "Power lifting" },
  { id: "yoga", name: "Yoga" },
  { id: "weightLifting", name: "Weight lifting" },
  { id: "aerobics", name: "Aerobics" },
  { id: "bodyBuilding", name: "Body building" },
];

export default function HealthClub() {
  const [formData, setFormData] = useState({
    batch: "",
    sportsCategory: "",
    activities: [],
  });

  const handleActivityChange = (activityId) => {
    setFormData((prev) => ({
      ...prev,
      activities: prev.activities.includes(activityId)
        ? prev.activities.filter((id) => id !== activityId)
        : [...prev.activities, activityId],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.card}>
        <h2 className={styles.title}>HEALTH CLUB</h2>

        <p className={styles.text}>
          Please read the <a href="#">Terms & Conditions</a> properly before
          applying to the Health Club. If you apply for the Health Club then it
          will be assumed that you agree to the Terms & Conditions.
        </p>

        <p className={styles.note}>
          <strong>Note:</strong> Beginners and First Year students are advised
          to apply for the morning batches only.
        </p>

        <p className={styles.warning}>
          Batch M/W/F M8823 (8:15 - 9:00 AM) & T/TH/S T9523 (8:15 - 9:00 AM) are
          specially for female students.
        </p>

        <div className={styles.formGroup}>
          <div className={styles.selectGroup}>
            <label htmlFor="batch">Batch:</label>
            <select
              id="batch"
              value={formData.batch}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, batch: e.target.value }))
              }
              required
            >
              <option value="" defaultValue disabled>
                Select
              </option>
              {BATCH_TIMINGS.map((batch) => (
                <option key={batch.id} value={batch.id}>
                  {batch.days} {batch.id} ({batch.time})
                  {batch.forFemale ? " - Female Only" : ""}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.selectGroup}>
            <label htmlFor="sportsCategory">Sports Category:</label>
            <select
              id="sportsCategory"
              value={formData.sportsCategory}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  sportsCategory: e.target.value,
                }))
              }
              required
            >
              <option value="">Select</option>
              {SPORTS_CATEGORIES.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <fieldset className={styles.checkboxGroup}>
          {ACTIVITIES.map((activity) => (
            <label key={activity.id}>
              <input
                type="checkbox"
                checked={formData.activities.includes(activity.id)}
                onChange={() => handleActivityChange(activity.id)}
              />
              {activity.name}
            </label>
          ))}
        </fieldset>

        <Button type="submit" className={styles.button}>
          Apply
        </Button>
      </div>
    </form>
  );
}
