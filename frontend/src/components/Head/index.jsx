import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import SHead from "./style";

export default function Head() {
  return (
    <SHead>
      <nav className="navBar">
        <Link to="/" className="navBar">
          <img className="navBarLogo" src={logo} alt="logo cinerama" />
          <h1> Change Your World</h1>
        </Link>
      </nav>
    </SHead>
  );
}
