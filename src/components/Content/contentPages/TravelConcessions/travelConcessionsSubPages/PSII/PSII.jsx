import styles from "./PSII.module.scss";
import { TravelTextInfo } from "../TravelComponent/TravelComponent";
import TravelComponent from "../TravelComponent/TravelComponent";
import { useState } from "react";

export default function PSII() {
  const [travelData, setTravelData] = useState({
    bitsStation: "",
    outStation: "",
    concessions: [],
  });

  const handleChange = (event) => {
    const { id, value, type, checked, name: eventName } = event.target;

    if (type === "checkbox") {
      const concessionValue = value;

      setTravelData((prevData) => {
        let updatedConcessions = [...prevData.concessions];

        if (checked) {
          updatedConcessions.push(concessionValue);
        } else {
          updatedConcessions = updatedConcessions.filter(
            (concession) => concession !== concessionValue
          );
        }

        return { ...prevData, concessions: updatedConcessions };
      });
    } else {
      setTravelData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.PSII}>
      <TravelTextInfo />
      <form action="" onSubmit={handleSubmit}>
        <TravelComponent
          name="PS-II"
          onChange={handleChange}
          formData={travelData}
        />
      </form>
    </div>
  );
}
