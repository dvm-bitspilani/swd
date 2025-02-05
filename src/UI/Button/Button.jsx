import styles from "./Button.module.scss";

export default function Button({ children, className = "" }) {
  return (
    <button className={`${styles.button} ${className}`} type="button">
      {children}
    </button>
  );
}
