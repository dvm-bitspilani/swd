import styles from "./General.module.scss";

const policyDetails = [
  {
    name: "Name",
    value: "Name",
  },
  {
    name: "Sex",
    value: "Male / Female",
  },
  {
    name: "Hostel",
    value: "Hostel",
  },
  {
    name: "Room",
    value: "xxxx",
  },
  {
    name: "Admission Year",
    value: "yyyy",
  },
  {
    name: "Admission Sem",
    value: "α",
  },
  {
    name: "Name of the Group Policy Holder",
    value: "BIRLA INSTITUTE OF TECHNOLOGY & SCIENCE",
  },
  {
    name: "Policy Number (GMC)",
    value: "",
  },
  {
    name: "Policy Number (GPA)",
    value: "",
  },
  {
    name: "Policy Commencement Date",
    value: "",
  },
  {
    name: "Policy End Date",
    value: "",
  },
  {
    name: "Member ID",
    value: "",
  },
  {
    name: "Check List for TPA",
    value: <a href="#">CHECK_LIST</a>,
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
      {policyDetails.map((detail, index) => (
        <div className={styles.detail} key={index}>
          <div className={styles.name}>{detail.name}:</div>
          <div className={styles.value}>{detail.value}</div>
        </div>
      ))}
    </div>
  );
}
