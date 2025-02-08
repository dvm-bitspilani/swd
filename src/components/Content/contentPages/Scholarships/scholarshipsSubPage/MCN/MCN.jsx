import React, { useState } from "react";
import styles from "./MCN.module.scss";
import info from "/svgs/info.svg";
import triangle from "/svgs/triangle.svg";
import Button from "../../../../../../UI/Button/Button";
import InfoText from "../scholarshipsComponents/InfoText/InfoText";
import ParentDetails from "../scholarshipsComponents/ParentDetails/ParentDetails";

function IncomeComponent({ onChange, income }) {
  return (
    <div className={styles.formGroup}>
      <div className={styles.label}>Income / Year:</div>
      <div className={styles.incomeWrapper}>
        <input
          type="number"
          className={styles.income}
          onChange={onChange}
          value={income}
        />
        <img src={info} alt="info" className={styles.icon} />
        <div className={styles.hoverInfo}>
          <img src={triangle} alt="trinagle" />
          <div className="msg">Don't use commas or decimals</div>
        </div>
      </div>
    </div>
  );
}

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
      <InfoText />
      <form onSubmit={handleSubmit} className={styles.mcnDetails}>
        <div className={styles.details}>
          <ParentDetails
            parent="Father"
            parentName={formData.fatherName}
            parentCertificate={formData.fatherCertificateType}
            parentProfession={formData.fatherProfession}
            onChange={(e) =>
              setFormData((...prev) => {
                return { ...prev, fatherCertificateType: e.target.value };
              })
            }
          >
            <IncomeComponent
              onChange={(e) =>
                setFormData((...prev) => {
                  return { ...prev, fatherIncome: e.target.value };
                })
              }
              income={formData.fatherIncome}
            />
          </ParentDetails>

          <ParentDetails
            parent="Mother"
            parentName={formData.motherName}
            parentCertificate={formData.motherCertificateType}
            parentProfession={formData.motherProfession}
            onChange={(e) =>
              setFormData((...prev) => {
                return { ...prev, motherCertificateType: e.target.value };
              })
            }
          >
            <IncomeComponent
              onChange={(e) =>
                setFormData((...prev) => {
                  return { ...prev, motherIncome: e.target.value };
                })
              }
              income={formData.motherIncome}
            />
          </ParentDetails>

          <div className={styles.uploadSection}>
            <div className={styles.label}>
              Upload both parents' Income Certificate:
              <p className={styles.fileInfo}>(PDF not exceeding 4MB)</p>
            </div>

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
          <div className={styles.checkBoxContainer}>
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={formData.agreementChecked}
              onChange={(e) =>
                setFormData((prev) => {
                  return { ...prev, agreementChecked: e.target.checked };
                })
              }
              required
            />
            <div className="text">Agree</div>
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
