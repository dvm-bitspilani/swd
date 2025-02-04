import Overview from "../contentPages/Overview/Overview";
import MyProfile from "../contentPages/MyProfile/MyProfile";
import Navigator from "../Navigator/Navigator";
import styles from "./Content.module.scss";

export default function Content() {
  return (
    <main className={styles.content}>
      <Navigator />
      <MyProfile />
    </main>
  );
}
