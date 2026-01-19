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
const servicesData = [
  {
    month: "August",
    suCab: 150,
    trunk: 50,
    quilt: 0,
    printer: 30,
    total: 230,
  },
  {
    month: "September",
    suCab: 200,
    trunk: 0,
    quilt: 0,
    printer: 45,
    total: 245,
  },
  {
    month: "October",
    suCab: 120,
    trunk: 0,
    quilt: 400,
    printer: 20,
    total: 540,
  },
  {
    month: "November",
    suCab: 180,
    trunk: 0,
    quilt: 0,
    printer: 50,
    total: 230,
  },
  {
    month: "December",
    suCab: 90,
    trunk: 0,
    quilt: 0,
    printer: 10,
    total: 100,
  },
];

const oasisData = [
  { label: "Snaps", key: "snaps", amount: 450 },
  { label: "Stalls/Food", key: "stalls", amount: 1200 },
  { label: "Merch", key: "merch", amount: 850 },
  { label: "Prof Show", key: "profShow", amount: 500 },
  { label: "Total Amount", key: "total", amount: 3000 },
];

const bosmData = [
  { label: "Snaps", key: "snaps", amount: 300 },
  { label: "Stalls/Food", key: "stalls", amount: 900 },
  { label: "Merch", key: "merch", amount: 600 },
  { label: "Reg Fee", key: "regFee", amount: 200 },
  { label: "Total Amount", key: "total", amount: 2000 },
];

const recNO = "XXXXX";

export default function SUPayments() {
  const [activeTab, setActiveTab] = useState("Eateries");

  // Logic for Eateries (Transposed)
  const eateriesMonths = paymentData.map((d) => d.month);
  const eateriesRows = [
    { label: "-301°F", key: "f301" },
    { label: "Amul", key: "amul" },
    { label: "ANC", key: "anc" },
    { label: "DCC", key: "dcc" },
    { label: "FM", key: "fm" },
    { label: "Looters", key: "looters" },
    { label: "Paradise Cafe", key: "paradiseCafe" },
    { label: "ToTT", key: "toTT" },
    { label: "Total Amount", key: "total" },
  ];

  // Logic for Services (Transposed)
  const servicesMonths = servicesData.map((d) => d.month);
  const servicesRows = [
    { label: "SU Cab", key: "suCab" },
    { label: "Trunk Service", key: "trunk" },
    { label: "Quilt Service", key: "quilt" },
    { label: "Printer", key: "printer" },
    { label: "Total Amount", key: "total" },
  ];

  const renderTransposedTable = (months, rowDescriptors, data) => (
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
        {rowDescriptors.map((rowDesc) => (
          <tr key={rowDesc.key}>
            <td className={styles.rowLabel}>{rowDesc.label}</td>
            {data.map((d, index) => (
              <td key={index} className={styles.cell}>
                {d[rowDesc.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );

  const renderSimpleTable = (data) => (
    <Table className={styles.table}>
      <thead>
        <tr className={styles.headerRow}>
          <th className={styles.headerCell} style={{ textAlign: 'left', paddingLeft: '20px' }}>Category</th>
          <th className={styles.headerCell}>Amount</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.key}>
            <td className={styles.rowLabel}>{row.label}</td>
            <td className={styles.cell}>{row.amount}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.recNO}>REC NO. : {recNO}</div>
        SU PAYMENTS BREAKUP OF EACH MONTH{" "}
      </div>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${activeTab === tab ? styles.active : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className={styles.tableWrapper}>
        {activeTab === "Eateries" && renderTransposedTable(eateriesMonths, eateriesRows, paymentData)}
        {activeTab === "Services" && renderTransposedTable(servicesMonths, servicesRows, servicesData)}
        {activeTab === "Oasis" && renderSimpleTable(oasisData)}
        {activeTab === "BOSM" && renderSimpleTable(bosmData)}
      </div>
    </div>
  );
}
