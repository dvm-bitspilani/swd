import DepositHistory from "./duesSubPages/Deposits/Deposits";
import CurrentStatus from "./duesSubPages/CurrentStatus/CurrentStatus";

const sampleData = [
  {
    receiptNo: 1,
    amount: 30250,
    mode: "AO",
    depositNo: "2177896",
    bankNo: "",
    date: "15 September 2024",
  },
];

const sampleData2 = {
  dueDate: "22/12/2024",
  balances: {
    deposits: 5698,
    withdrawals: 785,
    organizationalDues: 2675,
    latestBalance: 9644,
  },
};

const Dues = () => {
  // return <DepositHistory deposits={sampleData} />;
  return (
    <CurrentStatus
      dueDate={sampleData2.dueDate}
      balances={sampleData2.balances}
    />
  );
};

export default Dues;
