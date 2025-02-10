import styles from "./Deposits.module.scss";
import Table from "/src/UI/Table/Table";

const deposits = [
  {
    receiptNo: 1,
    amount: 30250,
    mode: "AO",
    depositNo: "2177896",
    bankNo: "",
    date: "15 September 2024",
  },
];

export default function Deposits() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>DEPOSIT HISTORY</h2>
      <p className={styles.description}>
        The following deposits were made during the current semester:
      </p>
      <div className={styles.tableWrapper}>
        <Table>
          <thead>
            <tr>
              <th>Receipt No.</th>
              <th>Amount</th>
              <th>Mode</th>
              <th>Deposit No.</th>
              <th>Bank No.</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {deposits.map((deposit) => (
              <tr key={deposit.receiptNo}>
                <td>{deposit.receiptNo}</td>
                <td>{deposit.amount}</td>
                <td>{deposit.mode}</td>
                <td>{deposit.depositNo}</td>
                <td>{deposit.bankNo || "-"}</td>
                <td>{deposit.date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
