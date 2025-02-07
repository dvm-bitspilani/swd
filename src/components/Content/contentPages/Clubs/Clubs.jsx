import React, { useState } from "react";
import HealthClub from "./HealthClub/HealthClub";
import SportsFacilities from "./SportsFacilities/SportsFacilities";
import YogaClub from "./YogaClub/YogaClub";
import styles from "./Clubs.module.scss";

const Clubs = () => {
  return (
    <div>
      <HealthClub />
      <SportsFacilities />
      <YogaClub />
    </div>
  );
};

export default Clubs;
