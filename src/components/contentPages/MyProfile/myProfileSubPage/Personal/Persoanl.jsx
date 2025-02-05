import styles from "./Personal.module.scss";
import Button from "/src/UI/Button/Button";

const sections = [
  {
    title: "Personal Details",
    details: [
      { name: "Date of Birth", value: "ab-cd-20xx" },
      { name: "Nationality", value: "Indian" },
      { name: "Category", value: "General" },
      { name: "Aadhaar No.", value: "1234 1234 1234 1234" },
      { name: "Blood Group", value: "AB+" },
      { name: "Allergies", value: "NA" },
      { name: "Chronic Diseases", value: "NA" },
    ],
  },
  {
    title: "Fee Paying Guardian Details",
    details: [
      { name: "Name", value: "Name" },
      { name: "Personal Phone No.", value: "+91 xxxxxxxxxx" },
      { name: "Alternate Email ID", value: "abc@gmail.com" },
      { name: "Education Loan", value: "NA" },
    ],
  },
  {
    title: "Father's Details",
    details: [
      { name: "Name", value: "Name" },
      { name: "Profession", value: "Profession" },
      { name: "Income / Year", value: "xxxxxx" },
      { name: "Mobile No.", value: "+91 xxxxxxxxxx" },
      { name: "Email ID", value: "father@gmail.com" },
    ],
  },
  {
    title: "Mother's Details",
    details: [
      { name: "Name", value: "Name" },
      { name: "Profession", value: "Profession" },
      { name: "Income / Year", value: "xxxxxx" },
      { name: "Mobile No.", value: "+91 xxxxxxxxxx" },
      { name: "Email ID", value: "mother@gmail.com" },
    ],
  },
  {
    title: "Bank Account Details",
    details: [
      { name: "Beneficiary Name", value: "Name" },
      { name: "Bank Name", value: "NA" },
      { name: "A/C No.", value: "NA" },
      { name: "A/C Type", value: "NA" },
      { name: "IFSC No.", value: "NA" },
      { name: "City Name", value: "NA" },
      { name: "Branch Name", value: "NA" },
      { name: "Branch Code", value: "NA" },
    ],
  },
  {
    title: "Extracurricular",
    details: [{ name: "Status", value: "NA" }],
  },
];

export default function Personal() {
  return (
    <div className={styles.personal}>
      {sections.map((section, index) => (
        <div key={index} className={styles.section}>
          <div className={styles.title}>{section.title}</div>
          <div className={styles.details}>
            {section.details.map((detail, idx) => (
              <div key={idx} className={styles.row}>
                <div className={styles.label}>{detail.name}:</div>
                <div className={styles.value}>{detail.value}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className={styles.buttonContainer}>
        <Button className={styles.changeBtn}>Change</Button>
      </div>
    </div>
  );
}
