import React, { useState } from "react";
import styles from "./SAF.module.scss";
import Button from "../../../../../../UI/Button/Button";
import InfoText from "../scholarshipsComponents/InfoText/InfoText";
import ParentDetails from "../scholarshipsComponents/ParentDetails/ParentDetails";

function IncomeComponent({ income }) {
  return (
    <div className={styles.autoFillData}>
      <div className={styles.label}>Income / Year:</div>
      <div>{income}</div>
    </div>
  );
}

export default function SAF() {
  const [formData, setFormData] = useState({
    fatherName: "Name",
    fatherProfession: "Profession",
    fatherIncome: "xxxxxxx",
    fatherCertificateType: "",
    motherName: "Name",
    motherProfession: "Profession",
    motherIncome: "xxxxxx",
    motherCertificateType: "",
    incomeCertificate: null,
    agreementChecked: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.saf}>
      <InfoText />
      <form onSubmit={handleSubmit} className={styles.safDetails}>
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
            <IncomeComponent income={formData.fatherIncome} />
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
            <IncomeComponent income={formData.motherIncome} />
          </ParentDetails>

          <div className={styles.externalEmail}>
            <div className={styles.label}>External Email:</div>
            <div> name@gmail.com</div>
          </div>
        </div>

        <Button type="submit" className={styles.changeBtn}>
          Change
        </Button>
      </form>

      <p className={styles.errorMsg}>Not Applied for SAF</p>
    </div>
  );
}
