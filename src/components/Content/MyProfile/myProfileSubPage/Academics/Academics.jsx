import styles from "./Academics.module.scss";

const data = {
  year: "2024",
  sem: "1-1",
  cg: "7.2",
};

export default function Academics() {
  return (
    <div className={styles.academics}>
      <div className={styles.academicDetails}>
        <table>
          <tr className={styles.tableHead}>
            <th>Year</th>
            <th>Semester</th>
            <th>CGPA</th>
          </tr>
          <tr className={styles.tableRow}>
            <td className={styles.year}>{data.year}</td>
            <td className={styles.sem}>{data.sem}</td>
            <td className={styles.cg}>{data.cg}</td>
          </tr>
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
