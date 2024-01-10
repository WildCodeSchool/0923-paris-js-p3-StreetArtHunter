import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
