import styles from "./General.module.scss";

const personalDetails = [
  {
    name: "Name",
    value: "Chill Guy Ramesh",
  },
  {
    name: "Sex",
    value: "Male",
  },
  {
    name: "Hostel",
    value: "Gandhi Bhawan",
  },
  {
    name: "Room",
    value: "2137",
  },
  {
    name: "Admission Year",
    value: "2025",
  },
  {
    name: "Admission Semester",
    value: "1",
  },
];

const policyDetails = [
  {
    name: "Name of Group Policy Holder",
    value: "BIRLA INSTITUTE OF TECHNOLOGY & SCIENCE",
  },
  {
    name: "Policy Number (GMC)",
    value: "-",
  },
  {
    name: "Policy Number (GPA)",
    value: "-",
  },
  {
    name: "Policy Commencement Date",
    value: "-",
  },
  {
    name: "Policy End Date",
    value: "-",
  },
  {
    name: "Member ID",
    value: "-",
  },
  {
    name: "Check List for TPA",
    value: <a href="#">CHECK LIST</a>,
  },
  {
    name: "Reckoner GMC",
    value: <a href="#">CLAIM PROCESS_GMC</a>,
  },
  {
    name: "Reckoner GPA",
    value: <a href="#">CLAIM PROCESS_GPA</a>,
  },
];

export default function General() {
  return (
    <div className={styles.general}>
      <div className={styles.section}>
        {personalDetails.map((detail, index) => (
          <div className={styles.detail} key={index}>
            <div className={styles.name}>{detail.name}:</div>
            <div className={styles.value}>{detail.value}</div>
          </div>
        ))}
      </div>
      <div className={styles.section}>
        {policyDetails.map((detail, index) => (
          <div className={styles.detail} key={index}>
            <div className={styles.name}>{detail.name}:</div>
            <div className={styles.value}>{detail.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
