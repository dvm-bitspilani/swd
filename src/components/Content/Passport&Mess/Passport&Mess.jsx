import styles from "./Passport&Mess.module.scss";
import Button from "/src/UI/Button/Button";
import { useState } from "react";

export default function PassportAndMess() {
  const [passportAndMess, setPassportAndMess] = useState({
    studentID: "",
    passportStatus: false,
  });

  const handleChange = (e) => {
    const studentID = e.target.value;
    setPassportAndMess((prevState) => ({
      ...prevState,
      studentID: studentID,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.certificates}>
      <div className={styles.prevApplied}>
        <div className={styles.title}>PASSPORT</div>
        <div className={styles.appliedCerti}>
          {passportAndMess.passportStatus ? (
            <></>
          ) : (
            <>
              <span>Status:</span> Not Available
            </>
          )}
        </div>
      </div>
      <div className={styles.selectCertificate}>
        <form
          className={styles.certificateForm}
          onSubmit={submitHandler}
          action=""
        >
          <div className={styles.title}>MESS FOOD</div>
          <div className={styles.formGroup}>
            <div className={styles.label}>Please enter your ID:</div>
            <input
              type="text"
              name="Student ID"
              value={passportAndMess.studentID}
              onChange={handleChange}
            />
          </div>

          <div className={styles.btnContainer}>
            <Button className={styles.applyBtn} type="submit">
              Exclude me from Mess
            </Button>
          </div>
          <div className={styles.info}>
            Only PhD Scholars can avail this feature.
          </div>
        </form>
      </div>
    </div>
  );
}
