import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QlARxLHVPIoyJMAaRKLAGzgvMcggwt.png"
          alt="BITS Pilani Logo"
          className={styles.logo}
        />
        <div>
          <h1 className={styles.title}>BITS Pilani</h1>
          <p className={styles.campus}>Pilani Campus</p>
        </div>
      </div>
      <h1 className={styles.title}>Student Welfare Division</h1>
      <div className={styles.userSection}>
        <img
          src="/placeholder.svg?height=40&width=40"
          alt="User"
          className={styles.userImage}
        />
        <div className={styles.userName}>
          <div>Chill Guy Ramesh</div>
          <div>2024CHGYXXXXP</div>
        </div>
      </div>
    </header>
  );
}
