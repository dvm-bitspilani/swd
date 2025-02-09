import styles from "./RAF.module.scss";
import Button from "/src/UI/Button/Button";
const certificatesList = ["HINDI", "ENGLISH"];

const prevList = [];

export default function RAF() {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.certificates}>
      <div className={styles.selectCertificate}>
        <form
          className={styles.certificateForm}
          onSubmit={submitHandler}
          action=""
        >
          <div className={styles.title}>RAF</div>
          <div className={styles.info}>Select movie type:</div>
          <div className={styles.selOptsContainer}>
            <select className={styles.certificateDropdown}>
              <option value={undefined} disabled selected>
                Select Language
              </option>
              {certificatesList.map((certi, index) => (
                <option key={index} value={certi}>
                  {certi}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.btnContainer}>
            <Button className={styles.applyBtn} type="submit">
              Apply
            </Button>
          </div>
        </form>
      </div>
      <div className={styles.prevApplied}>
        <div className={styles.title}>RAF APPLIED</div>
        <div className={styles.appliedCerti}>
          {prevList.length > 0 ? (
            <></>
          ) : (
            <>
              <span>Error:</span> Extraction of applied RAF movie details
              failed.
            </>
          )}
        </div>
      </div>
    </div>
  );
}
