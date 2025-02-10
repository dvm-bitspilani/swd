import React, { useState } from "react";
import HealthClub from "./HealthClub/HealthClub";
import SportsFacilities from "./SportsFacilities/SportsFacilities";
import YogaClub from "./YogaClub/YogaClub";
import styles from "./Clubs.module.scss";

export default function Clubs() {
  return (
    <div className={styles.clubs}>
      <HealthClub />
      <SportsFacilities />
      <YogaClub />
    </div>
  );
}
