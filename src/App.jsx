import styles from"./App.module.scss"
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import Content from "./components/Content/Content"

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
