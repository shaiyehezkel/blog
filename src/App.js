import {Header} from "./components/header.js";
import {Outlet} from "react-router-dom";

export function App() {
  return (
      <div>
        <Header />
        <Outlet />
      </div>
  )
}