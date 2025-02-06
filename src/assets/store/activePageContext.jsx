import { useState, createContext } from "react";
import pages from "../Pages";

export const ActivePageContext = createContext();

export default function ActivePageContextProvider(props) {
  const [activePage, setActivePage] = useState(pages[0].name);
  
  return (
    <ActivePageContext.Provider value={{ activePage, setActivePage }}>
      {props.children}
    </ActivePageContext.Provider>
  );
}
