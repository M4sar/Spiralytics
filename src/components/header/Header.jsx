import { NavListL } from "./NavLeft/NavListL";
import { DropdownMenu } from "./NavRight/DropdownMenu";
import { useEffect, useState } from "react";
import "./NavLeft/HeaderNavL.css";

export function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll) setIsHidden(true); // вниз
      else setIsHidden(false); // вверх
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div className="header-wrapper">
      <header className={`header-main ${isHidden ? "hidden" : ""}`}>
        <nav>
          <NavListL />
        </nav>
        <nav>
          <DropdownMenu />
        </nav>
      </header>
    </div>
  );
}
