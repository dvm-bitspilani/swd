import styles from "./ArrearDetails.module.scss";
import Table from "/src/UI/Table/Table";
import forwardSVG from "/public/svgs/forwardArrow.svg";
import info from "/public/svgs/info.svg";

const arrearData = [
  {
    month: "08/2024",
    openingBalance: 5626,
    messCharges: 8861,
    electricityCharges: 8811,
    otherDues: 600,
    deposit: 9151,
    withdrawal: 5948,
    closingBalance: 4152,
  },
  {
    month: "09/2024",
    openingBalance: 5028,
    messCharges: 9374,
    electricityCharges: 4846,
    otherDues: 856,
    deposit: 1148,
    withdrawal: 4600,
    closingBalance: 6065,
  },
  {
    month: "10/2024",
    openingBalance: 9359,
    messCharges: 9261,
    electricityCharges: 5560,
    otherDues: 115,
    deposit: 9462,
    withdrawal: 1374,
    closingBalance: 1439,
  },
];
const headerRow = [
  "MM/YYYY",
  "Opening Balance",
  "Mess Charges",
  "Electricity Charges",
  "Other Dues",
  "Deposit",
  "Withdrawal",
  "Closing Balance",
];
const notes = [
  "Mess bill for the month of December 2023 is included into the arrear of January 2024.",
  "The electricity charges of November & December of the Research Hostels are also included into the arrear of January 2024.",
  "Negative balance indicates that the student has to pay.",
];

export default function ArrearDetails() {
  const months = arrearData.map((d) => d.month);

  const rows = [
    { label: "Opening Balance", key: "openingBalance" },
    { label: "Mess Charges", key: "messCharges" },
    { label: "Electricity Charges", key: "electricityCharges" },
    { label: "Other Dues", key: "otherDues" },
    { label: "Deposit", key: "deposit" },
    { label: "Withdrawal", key: "withdrawal" },
    { label: "Closing Balance", key: "closingBalance" },
  ];

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          ARREAR DETAILS FOR THE CURRENT ACADEMIC YEAR
        </div>
        <div className={styles.tableWrapper}>
          <Table className={styles.table}>
            <thead>
              <tr className={styles.headerRow}>
                <th className={styles.firstColHeader}></th>
                {months.map((month, index) => (
                  <th className={styles.headerCell} key={index}>
                    {month}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((rowDesc) => (
                <tr key={rowDesc.key}>
                  <td className={styles.rowLabel}>{rowDesc.label}</td>
                  {arrearData.map((data, index) => (
                    <td key={index} className={styles.cell}>
                      {data[rowDesc.key]}
                      {rowDesc.key === "otherDues" && (
                        <img src={info} alt="infoSVG" className={styles.info} />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      <div className={styles.notes}>
        Notes:
        {notes.map((note, index) => (
          <div className={styles.note} key={index}>
            {"(" + (index + 1) + ")"} {note}
          </div>
        ))}
        <a className={styles.importantNote}>
          For issues with ‘Other Dues’ <span className={styles.svgMask}>h</span>
        </a>
      </div>
    </div>
  );
}
