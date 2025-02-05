import styles from "./Academics.module.scss";

export default function Academics() {
  return (
    <div className={styles.academics}>
      <div className={styles.academicDetails}>
        <table>
          <thead className={styles.tableHead}>
            <tr>
              <th>Year</th>
              <th>Semester</th>
              <th>CGPA</th>
            </tr>
          </thead>
          <tbody className={styles.tableRow}>
            <tr>
              <td className={styles.year}>2024</td>
              <td className={styles.sem}>1-1</td>
              <td className={styles.cg}>7.2</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.disclaimer}>
        <div className={styles.line1}>
          CGPA details are indicative only, please rely on your ARCD CG Card.
        </div>
        <div className={styles.line2}>
          The semester mentioned may be incorrect. Don't worry, we are working
          on it!
        </div>
      </div>
    </div>
  );
}
