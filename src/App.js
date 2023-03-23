import "./styles.css";
import Navbar from "./components/NavbarComponents/Navbar";
import { Routes } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Navbar/>
      </Routes> */}
      <Navbar/>
    </div>
  );
}
