import styles from "./ParentDetails.module.scss";

const listOfCertificates = [
  "Income Tax Return",
  "Salary Slip",
  "Salary Certificate",
  "Pensioner",
  "Tehsildar Cert.",
  "MRO",
  "Any Other",
  "Not Applicable",
];

export default function ParentDetails({
  children,
  parent,
  parentName,
  parentProfession,
  parentCertificate,
  onChange,
}) {
  return (
    <div className={styles.parentDetails}>
      <div className={styles.title}>{parent}'s Details</div>
      <div className={styles.autoFillData}>
        <div className={styles.label}>Name:</div>
        <div>{parentName}</div>
      </div>
      <div className={styles.autoFillData}>
        <div className={styles.label}>Profession:</div>
        <div>{parentProfession}</div>
      </div>
      {children}
      <div className={styles.formGroup}>
        <div className={styles.label}>Income Certificate Type:</div>
        <select
          value={parentCertificate}
          className={styles.certificateType}
          onChange={onChange}
        >
          <option value="" disabled>
            Select
          </option>
          {listOfCertificates.map((certificate) => (
            <option key={certificate} value={certificate}>
              {certificate}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
