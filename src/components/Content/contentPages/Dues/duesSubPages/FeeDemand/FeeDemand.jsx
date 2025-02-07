import styles from "./FeeDemand.module.scss";

const FeeDemand = () => {
  return (
    <div className={styles.mainText}>
      <p>
        To download or check the Fee Demand, please login on{" "}
        <a href="https://erp.bits-pilani.ac.in/" target="_blank">
          ERP
        </a>
        .
      </p>
    </div>
  );
};
export default FeeDemand;
