import React from "react";
import styles from "./Arrears.module.scss";
import ArrearDetails from "./ArrearDetails/ArrearDetails";
import MessBreakup from "./MessBreakup/MessBreakup";
import SUPayments from "./SUPayments/SUPayments";

const Arrears = () => {
  return (
    <div className={styles.container}>
      <ArrearDetails />
      <MessBreakup />
      <SUPayments />
    </div>
  );
};

export default Arrears;
