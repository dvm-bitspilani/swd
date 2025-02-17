import styles from "./SUPayments.module.scss";
import { useState } from "react";
import Table from "/src/UI/Table/Table";
import Button from "/src/UI/Button/Button";

const paymentData = [
  {
    month: "August",
    f301: 423,
    amul: 556,
    anc: 196,
    dcc: 740,
    fm: 561,
    looters: 583,
    paradiseCafe: 130,
    toTT: 426,
    total: 536,
  },
  {
    month: "September",
    f301: 826,
    amul: 877,
    anc: 647,
    dcc: 738,
    fm: 600,
    looters: 274,
    paradiseCafe: 492,
    toTT: 922,
    total: 185,
  },
  {
    month: "October",
    f301: 816,
    amul: 154,
    anc: 703,
    dcc: 540,
    fm: 994,
    looters: 447,
    paradiseCafe: 798,
    toTT: 357,
    total: 453,
  },
];
const headerRow = [
  "Month",
  "-301°F",
  "Amul",
  "ANC",
  "DCC",
  "FM",
  "Looters",
  "Paradise Cafe",
  "ToTT",
  "Total",
];
const tabs = ["Eateries", "Services", "Oasis", "BOSM"];
const recNO = "XXXXX";

export default function SUPayments() {
  const [activeTab, setActiveTab] = useState("Eateries");

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        SU PAYMENTS BREAKUP OF EACH MONTH{" "}
        <div className={styles.recNO}>REC NO. : {recNO}</div>
      </div>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${
              activeTab === tab ? styles.active : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
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
          {paymentData.map((row) => (
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
