import styles from "./Gate.module.scss";
import { useState } from "react";
import Button from "../../../../../../UI/Button/Button";

const catagoryList = ["OBC", "SC", "ST", "Any Other"];
const gateDisciplineList = [
  "M.E. Biotechnology",
  "M.E. Chemical",
  "M.E. Civil",
  "M.E. Communication Systems",
  "M.E. Computer Science",
  "M.E. Design Engineering",
  "M.E. Embedded Systems",
  "M.E. Manufacturing Systems Engineering",
  "M.E. Mechanical Engineering",
  "M.E. Microelectronics",
  "M.Pharm",
  "M.E. Software Systems",
];

export default function Gate() {
  const [formData, setFormData] = useState({
    category: "",
    percentageUG: "",
    collegeName: "",
    gateRegNo: "",
    gateScore: "",
    gateDiscipline: "",
    gateExamDate: "",
    gateResultDate: "",
    aadhaarNo: "",
    studentNameAsPerBank: "",
    bankName: "",
    studentAccountNo: "",
    bankBranchNameAddress: "",
    ifscCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.gate}>
      <div className={styles.infoText}>
        <p className={styles.warning}>
          Please make sure that you fill the details correctly, else your
          application will be discarded.
        </p>
        <p>
          You will not be able to change the details once you have submitted. To
          update the details, please visit the SWD office.
        </p>
      </div>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <div className={styles.formGroup}>
            <div className={styles.label}>Category:</div>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={`${styles.input} ${styles.short}`}
            >
              <option value="" disabled>
                Select
              </option>
              {catagoryList.map((station, index) => (
                <option key={index} value={station}>
                  {station}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.label}>Percentage in UG:</div>
            <input
              type="text"
              name="percentageUG"
              value={formData.percentageUG}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <div className={styles.label}>Name of College:</div>
            <input
              type="text"
              name="collegeName"
              value={formData.collegeName}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <div className={styles.label}>GATE Regd. No.:</div>
            <input
              type="text"
              name="gateRegNo"
              value={formData.gateRegNo}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <div className={styles.label}>GATE Score:</div>
            <input
              type="Number"
              name="gateScore"
              value={formData.gateScore}
              onChange={handleChange}
              className={`${styles.input} ${styles.short}`}
            />
          </div>

          <div className={styles.formGroup}>
            <div className={styles.label}>GATE Discipline:</div>
            <select
              name="gateDiscipline"
              value={formData.gateDiscipline}
              onChange={handleChange}
              className={styles.input}
            >
              <option value="" disabled>
                Select
              </option>
              {gateDisciplineList.map((station, index) => (
                <option key={index} value={station}>
                  {station}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.label}>GATE Exam Date:</div>
            <input
              type="date"
              name="gateExamDate"
              value={formData.gateExamDate}
              onChange={handleChange}
              className={`${styles.input} ${styles.short}`}
            />
          </div>

          <div className={styles.formGroup}>
            <div className={styles.label}>GATE Result Date:</div>
            <input
              type="date"
              placeholder="Select"
              name="gateResultDate"
              value={formData.gateResultDate}
              onChange={handleChange}
              className={`${styles.input} ${styles.short}`}
            />
          </div>

          <div className={styles.formGroup}>
            <div className={styles.label}>Aadhaar No.:</div>
            <input
              type="text"
              name="aadhaarNo"
              value={formData.aadhaarNo}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <div className={styles.label}>Student Name as per Bank:</div>
            <input
              type="text"
              name="studentNameAsPerBank"
              value={formData.studentNameAsPerBank}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <div className={styles.label}>Name of Bank:</div>
            <input
              type="text"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <div className={styles.label}>Student Account No.:</div>
            <input
              type="text"
              name="studentAccountNo"
              value={formData.studentAccountNo}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <div className={styles.label}>Bank's Branch Name and Address:</div>
            <textarea
              name="bankBranchNameAddress"
              value={formData.bankBranchNameAddress}
              onChange={handleChange}
              className={styles.textarea}
            />
          </div>

          <div className={styles.formGroup}>
            <div className={styles.label}>IFSC Code:</div>
            <input
              type="text"
              name="ifscCode"
              value={formData.ifscCode}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
        </div>

        <Button type="submit" className={styles.saveBtn}>
          Save
        </Button>
      </form>
    </div>
  );
}
