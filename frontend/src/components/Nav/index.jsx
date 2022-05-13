import { useEffect, useState } from "react";
import SNav from "./style";

export default function Header() {
  const showLinks = useState(false);
  const [y, setY] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setY(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setY(window.scrollY);
      });
    };
  }, []);

  return (
    <SNav>
      <nav
        className={`navBar ${showLinks ? "showNav" : "hideNav"} ${
          y === 0 ? "navBar" : "navBarSolid"
        }`}
      >
        <img
          className="navBarLogo"
          src="src/assets/logo.png"
          alt="logo cinerama"
        />
        <h1>Change Your World</h1>
      </nav>
    </SNav>
  );
}
