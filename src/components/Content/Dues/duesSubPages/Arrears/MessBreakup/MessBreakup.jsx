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
  const months = messData.map((d) => d.month);

  const rows = [
    { label: "Mess Basic", key: "messBasic" },
    { label: "Pitstop Extra", key: "pitstopExtra" },
    { label: "D Cafe", key: "dCafe" },
    { label: "Food Extra", key: "foodExtra" },
    { label: "Vacation", key: "summerWinter" },
    { label: "Total Amount", key: "totalAmount" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.recNO}>REC NO. : {recNO}</div>
        MESS FEES BREAKUP FOR THE CURRENT ACADEMIC YEAR
      </div>
      <div className={styles.tableWrapper}>
        <Table className={styles.table}>
          <thead>
            <tr className={styles.headerRow}>
              <th className={styles.firstColHeader}></th>
              {months.map((month, index) => (
                <th key={index} className={styles.headerCell}>
                  {month}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((rowDesc) => (
              <tr key={rowDesc.key}>
                <td className={styles.rowLabel}>{rowDesc.label}</td>
                {messData.map((data, index) => (
                  <td key={index} className={styles.cell}>
                    {data[rowDesc.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
