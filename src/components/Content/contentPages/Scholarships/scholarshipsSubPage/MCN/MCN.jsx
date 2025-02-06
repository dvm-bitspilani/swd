import React, { useState } from "react";
import styles from "./MCN.module.scss";
import info from "/svgs/info.svg";
import triangle from "/svgs/triangle.svg";
import Button from "../../../../../../UI/Button/Button";

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

export default function MCN() {
  const [formData, setFormData] = useState({
    fatherName: "Name",
    fatherProfession: "Profession",
    fatherIncome: "",
    fatherCertificateType: "",
    motherName: "Name",
    motherProfession: "Profession",
    motherIncome: "",
    motherCertificateType: "",
    incomeCertificate: null,
    agreementChecked: false,
  });

  const [fileName, setFileName] = useState("Browse...");

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("Browse...");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.mcn}>
      <div className={styles.infoText}>
        <p className={styles.warning}>
          Please make sure that the personal details displayed are correct and
          upto date, else your application will be discarded.
        </p>
        <p>
          To update the personal details, please modify the details under{" "}
          <a href="#">My Profile</a>.
        </p>
        <p>
          Please select the appropriate Income Certificate type for your mother
          and father.
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.mcnDetails}>
        <div className={styles.details}>
          <div className={styles.parentSection}>
            <div className={styles.title}>Father's Details</div>
            <div className={styles.autoFillData}>
              <div className={styles.label}>Name:</div>
              <div>{formData.fatherName}</div>
            </div>
            <div className={styles.autoFillData}>
              <div className={styles.label}>Profession:</div>
              <div>{formData.fatherProfession}</div>
            </div>
            <div className={styles.formGroup}>
              <div className={styles.label}>Income / Year:</div>
              <div className={styles.incomeWrapper}>
                <input type="number" className={styles.income} />
                <img src={info} alt="info" className={styles.icon} />
                <div className={styles.hoverInfo}>
                  <img src={triangle} alt="trinagle" />
                  <div className="msg">Don't use commas or decimals</div>
                </div>
              </div>
            </div>
            <div className={styles.formGroup}>
              <div className={styles.label}>Income Certificate Type:</div>
              <select
                value={formData.fatherCertificateType}
                className={styles.certificateType}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    fatherCertificateType: e.target.value,
                  })
                }
              >
                <option value="" disabled selected>
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

          <div className={styles.parentSection}>
            <div className={styles.title}>Mother's Details</div>
            <div className={styles.autoFillData}>
              <div className={styles.label}>Name:</div>
              <div>{formData.motherName}</div>
            </div>
            <div className={styles.autoFillData}>
              <div className={styles.label}>Profession:</div>
              <div>{formData.motherProfession}</div>
            </div>
            <div className={styles.formGroup}>
              <div className={styles.label}>Income / Year:</div>
              <div className={styles.incomeWrapper}>
                <input type="number" className={styles.income} />
                <img src={info} alt="info" className={styles.icon} />
                <div className={styles.hoverInfo}>
                  <img src={triangle} alt="trinagle" />
                  <div className="msg">Don't use commas or decimals</div>
                </div>
              </div>
            </div>
            <div className={styles.formGroup}>
              <div className={styles.label}>Income Certificate Type:</div>
              <select
                value={formData.motherCertificateType}
                className={styles.certificateType}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    motherCertificateType: e.target.value,
                  })
                }
              >
                <option value="" disabled selected>
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

          <div className={styles.uploadSection}>
            <div className={styles.label}>
              Upload both parents' Income Certificate:
              <p className={styles.fileInfo}>(PDF not exceeding 4MB)</p>
            </div>
            {/* <input
              type="file"
              accept=".pdf"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  incomeCertificate: e.target.files[0],
                })
              }
              required
            /> */}
            <div className={styles.fileInput}>
              <span className={styles.browseText}>{fileName}</span>
              <span className={styles.plusIcon}>+</span>
              <input type="file" accept=".pdf" onChange={handleFileChange} />
            </div>
          </div>
        </div>

        <div className={styles.agreementSection}>
          <div className={styles.dis}>
            <p>
              I hereby declare that the information given above is correct. I am
              not availing any other scholarship for this purpose from any other
              Central Govt./State Govt. sources. I shall abide by the terms and
              conditions for sanctioning the Merit/Merit cum need-based
              Scholarship. I have uploaded the desired and correct documents in
              support of the Scholarship.
            </p>
            <p>
              If the information given by me is false, or if I violate the terms
              and conditions of the Scholarship, the Scholarship sanctioned to
              me may be cancelled. I will abide by the decision of the
              Scholarship committee in this regard.
            </p>
          </div>
          <div className="checkBoxContainer">
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={formData.agreementChecked}
              onChange={(e) =>
                setFormData({ ...formData, agreementChecked: e.target.checked })
              }
              requireds
            />{" "}
            Agree
          </div>
        </div>

        <Button type="submit" className={styles.saveBtn}>
          Save
        </Button>
      </form>

      <p className={styles.errorMsg}>Not Accepting Applications for MCN</p>
    </div>
  );
}
