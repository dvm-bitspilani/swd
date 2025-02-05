import styles from "./Certificates.module.scss";
import Button from "/src/UI/Button/Button";
const certificatesList = [
  "Bonafide",
  "CGPA Conversion",
  "Exp. Statement(FD)",
  "Exp. Statemen (DD)",
  "Exp. Statemen (HD)",
  "Vacation",
  "Course Duration",
  "Institute Recognization",
];

const prevList = [];

export default function Certificates() {
  return (
    <div className={styles.certificates}>
      <div className={styles.selectCertificate}>
        <div className={styles.title}>APPLY FOR CERTIFICATES</div>
        <div className={styles.selectOptions}>
          <select name="certi" id="certi">
            <option value={undefined} disabled selected>
              Select certificate Type
            </option>
            {certificatesList.map((certi, index) => (
              <option key={index} value={certi}>
                {certi}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.btnContainer}>
          <Button className={styles.applyBtn}> Apply </Button>
        </div>
      </div>
      <div className={styles.info}>
        For any other certificate, contact the SWD Office.
      </div>
      <div className={styles.prevApplied}>
        <div className="title">PREVIOUSLY APPLIED CERRTIFICATES</div>
        <div className={styles.appliedCerti}>
          {prevList.length > 0 ? (
            <></>
          ) : (
            <>Not Applied for any certifcate in past</>
          )}
        </div>
      </div>
    </div>
  );
}
