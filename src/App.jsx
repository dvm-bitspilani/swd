import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import ActivePageContextProvider from "./assets/store/activePageContext";

function App() {
  return (
    <ActivePageContextProvider>
      <div className={styles.pageWrapper}>
        <Header />
        <div className={styles.container}>
          <div className={styles.mainContent}>
            <Sidebar />
            <Content />
          </div>
        </div>
      </div>
    </ActivePageContextProvider>
  );
}

export default App;
