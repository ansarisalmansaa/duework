import { Link } from "react-router-dom";
import "./Navbar.css";
import HomeB from "./HomeButton";

function Navbar() {
  return (
    <nav>
      
      <label id="NavLabel">
        <span id="Navdue">DUE</span>
        <span id="Navwork">WORK</span>
      </label>
      <div><HomeB/></div>
    </nav>
  );
}

export default Navbar;
