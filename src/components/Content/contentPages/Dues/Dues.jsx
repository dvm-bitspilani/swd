import DepositHistory from "./duesSubPages/Deposits/Deposits";

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
const Dues = () => {
  return <DepositHistory deposits={sampleData} />;
};

export default Dues;
