import styles from "./Button.module.scss";

export default function Button({ children, className = "", type = "button" }) {
  return (
    <button className={`${styles.button} ${className}`} type={type}>
      {children}
    </button>
  );
}
