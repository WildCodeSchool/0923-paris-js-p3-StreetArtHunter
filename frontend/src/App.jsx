import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import FooterNotConnected from "./components/Footer/FooterNotConnected";

import "./App.css";

function App() {
  return (
    <main>
      <Header />
      <Outlet />
      <FooterNotConnected />
    </main>
  );
}

export default App;
