import styles from "./Deposits.module.scss";
import Table from "../../../../../../UI/Table/Table";

const DepositHistory = ({ deposits }) => {
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
};

export default DepositHistory;
