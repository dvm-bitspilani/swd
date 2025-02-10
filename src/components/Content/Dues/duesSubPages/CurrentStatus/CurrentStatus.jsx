import styles from "./CurrentStatus.module.scss";
import Table from "/src/UI/Table/Table";

const sampleData2 = {
  dueDate: "22/12/2024",
  balances: {
    deposits: 5698,
    withdrawals: 785,
    organizationalDues: 2675,
    latestBalance: 9644,
  },
};

const dueDate = sampleData2.dueDate;
const balances = sampleData2.balances;

export default function CurrentStatus() {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>PAYMENT STATUS</h2>
        <p className={styles.dueDate}>
          Dues status on: <span className={styles.date}>{dueDate}</span>
        </p>

        <div className={styles.tableWrapper}>
          <Table>
            <thead>
              <tr>
                <th>Balance as per Due Arrears</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Deposits (not accounted):</td>
                <td>{balances.deposits}</td>
              </tr>
              <tr>
                <td>Withdrawls (not accounted):</td>
                <td>{balances.withdrawals}</td>
              </tr>
              <tr>
                <td>Organizational Dues (not accounted):</td>
                <td>{balances.organizationalDues}</td>
              </tr>
              <tr className={styles.latestBalance}>
                <td>Latest Balance</td>
                <td>{balances.latestBalance}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <p className={styles.note}>
        Note: Negative balance indicates that the student has to pay.
      </p>
    </>
  );
}
