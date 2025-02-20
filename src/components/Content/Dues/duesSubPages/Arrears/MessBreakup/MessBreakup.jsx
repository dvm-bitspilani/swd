import styles from "./MessBreakup.module.scss";
import Table from "/src/UI/Table/Table";

const messData = [
  {
    month: "August",
    totalAmount: 1374,
    messBasic: 9462,
    pitstopExtra: 5948,
    dCafe: 6025,
    foodExtra: 3933,
    summerWinter: 8829,
  },
  {
    month: "September",
    totalAmount: 1148,
    messBasic: 3536,
    pitstopExtra: 4152,
    dCafe: 4846,
    foodExtra: 7791,
    summerWinter: 1439,
  },
  {
    month: "October",
    totalAmount: 8013,
    messBasic: 6065,
    pitstopExtra: 9151,
    dCafe: 1784,
    foodExtra: 6690,
    summerWinter: 5028,
  },
];
const headerRow = [
  "Month",
  "Total Amount",
  "Mess Basic",
  "Pitstop Extra",
  "D Cafe",
  "Food Extra",
  "Summer Winter Vacation",
];
const recNO = "XXXXX";

export default function MessBreakup() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        MESS BREAKUP OF EACH MONTH
        <div className={styles.recNO}>REC NO. : {recNO}</div>
      </div>
      <Table className={styles.table}>
        <thead>
          <tr className={styles.headerRow}>
            {headerRow.map((header) => (
              <th key={header} className={styles.headerCell}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {messData.map((row) => (
            <tr key={row.month}>
              {Object.keys(row).map((key) => (
                <td key={key} className={styles.cell}>
                  {row[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
