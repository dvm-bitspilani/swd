import { RouterProvider } from "react-router-dom";
import router from "./router";
import styles from "./App.module.scss";

import { SidebarProvider } from "./assets/SidebarContext";

export default function App() {
  return (
    <SidebarProvider>
      <RouterProvider router={router} />
    </SidebarProvider>
  );
}
