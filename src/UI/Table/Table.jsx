import styles from "./Table.module.scss";

const Table = (props) => {
  return (
    <table className={styles.table + " " + props.className}>
      {props.children}
    </table>
  );
};

export default Table;
