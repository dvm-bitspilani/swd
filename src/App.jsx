import { RouterProvider } from "react-router-dom";
import router from "./router";
import styles from "./app.module.scss";

export default function App() {
  console.log(router);
  return <RouterProvider router={router} />;
}
