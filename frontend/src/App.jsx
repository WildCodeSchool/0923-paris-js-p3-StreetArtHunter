import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
// import FooterNotConnected from "./components/Footer/FooterNotConnected";
import FooterConnected from "./components/Footer/FooterConnected";
import "./App.css";

function App() {
  return (
    <main>
      <Header />
      <Outlet />
      {/* <FooterNotConnected /> */}
      <FooterConnected />
    </main>
  );
}

export default App;
