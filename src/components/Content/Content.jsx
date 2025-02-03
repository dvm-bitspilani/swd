import Overview from "../contentPages/Overview/Overview"
import Navigator from "../Navigator/Navigator"
import styles from "./Content.module.scss"

export default function Content() {
  return (
    <main className={styles.content}>
      <Navigator />
      <Overview />
    </main>
  )
}

