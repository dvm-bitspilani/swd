import DepositHistory from "./duesSubPages/Deposits/Deposits";
import CurrentStatus from "./duesSubPages/CurrentStatus/CurrentStatus";
import FeeDemand from "./duesSubPages/FeeDemand/FeeDemand";
import styles from "./Dues.module.scss";
import { Outlet } from "react-router-dom";

export default function Dues() {
  return (
    <div className={styles.dues}>
      <Outlet />
    </div>
  );
}
