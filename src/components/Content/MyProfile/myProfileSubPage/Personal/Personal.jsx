import styles from "./Personal.module.scss";
import Button from "/src/UI/Button/Button";



export default function Personal() {
  const personalDetails = [
    { name: "Date of Birth", value: "06/06/2006" },
    { name: "Nationality", value: "Indian" },
    { name: "Category", value: "General" },
    { name: "Aadhaar Number", value: "-" },
    { name: "Name of Fee-paying Guardian", value: "-" },
    { name: "Personal Phone Number", value: "9999999999" },
    { name: "Alternate Email ID", value: "abcd@gmail.com" },
    { name: "Education Loan", value: "No" },
    { name: "Blood Group", value: "AB+" },
    { name: "Allergies", value: "None" },
    { name: "Chronic Diseases", value: "None" },
  ];

  const fathersDetails = [
    { name: "Name", value: "Fatherly Name" },
    { name: "Profession", value: "Doctor" },
    { name: "Income per Year", value: "15,00,000" },
    { name: "Phone Number", value: "9999999999" },
    { name: "Email ID", value: "abcd@gmail.com" },
  ];

  const mothersDetails = [
    { name: "Name", value: "Motherly Name" },
    { name: "Profession", value: "Engineer" },
    { name: "Income per Year", value: "15,00,000" },
    { name: "Phone Number", value: "9999999999" },
    { name: "Email ID", value: "abcd@gmail.com" },
  ];

  const bankDetails = [
    { name: "Beneficiary Name", value: "Chill Guy Ramesh" },
    { name: "Bank Name", value: "-" },
    { name: "A/C Number", value: "-" },
    { name: "A/C Type", value: "-" },
    { name: "IFSC Code", value: "-" },
    { name: "City Name", value: "-" },
    { name: "Branch Name", value: "-" },
    { name: "Branch Code", value: "-" },
  ];

  const extracurricular = [
    { name: "Status", value: "N/A" }
  ];

  const renderSection = (title, details) => (
    <div className={styles.section}>
      <div className={styles.title}>{title}</div>
      <div className={styles.details}>
        {details.map((detail, idx) => (
          <div key={idx} className={styles.row}>
            <div className={styles.label}>{detail.name}:</div>
            <div className={styles.value}>{detail.value}</div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={styles.personal}>
      <div className={styles.leftColumn}>
        {renderSection("PERSONAL DETAILS", personalDetails)}
        {renderSection("BANK ACCOUNT DETAILS", bankDetails)}
      </div>
      <div className={styles.rightColumn}>
        {renderSection("FATHER’S DETAILS", fathersDetails)}
        {renderSection("MOTHER’S DETAILS", mothersDetails)}
        {renderSection("EXTRACURRICULAR", extracurricular)}
      </div>
      <div className={styles.buttonContainer}>
        <Button className={styles.changeBtn}>Change</Button>
      </div>
    </div>
  );
}
