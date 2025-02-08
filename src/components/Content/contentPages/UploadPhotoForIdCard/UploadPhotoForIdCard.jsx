import { useState } from "react";
import styles from "./UploadPhotoForIdCard.module.scss";
import Button from "../../../../UI/Button/Button";

export default function UploadPhotoForIdCard() {
  const [fileName, setFileName] = useState("Browse...");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFileName(e.target.files[0].name);
      setFile(e.target.file[0]);
    } else {
      setFileName("Browse...");
      setFile(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.uploadPhotoForIdCard}>
      <div className={styles.uploadPhoto}>
        <form className={styles.photoForm} onSubmit={handleSubmit} action="">
          <div className={styles.title}>UPLOAD PHOTO FOR ID CARD</div>
          <div className={styles.uploadPhotoContainer}>
            <div className={styles.fileInput}>
              <span className={styles.browseText}>{fileName}</span>
              <span className={styles.plusIcon}>+</span>
              <input type="file" accept=".jpg" onChange={handleFileChange} />
            </div>
          </div>
          <div className={styles.btnContainer}>
            <Button className={styles.applyBtn} type="submit">
              Upload
            </Button>
          </div>
        </form>
      </div>

      <div className={styles.info}>
        Notes:
        <ul>
          <li>Upload .JPG file</li>
          <li>Upload only 2.5 cm x 2.5 cm size photos</li>
        </ul>
      </div>
    </div>
  );
}
