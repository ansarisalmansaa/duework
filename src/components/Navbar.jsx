import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <label id="NavLabel">
        <span id="Navdue">DUE</span>
        <span id="Navwork">WORK</span>
      </label>
    </nav>
  );
}

export default Navbar;
