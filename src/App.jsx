import styles from"./styles/App.module.scss"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Content from "./components/Content"

function App() {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <Sidebar />
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
