import { HeaderBlock } from "./HeaderAnchor";
import "./Header.css";
import DropdownMenu from "./DropdownMenu";

export function Header() {
  return (
    <header className="header-main">
      <nav>
        <HeaderBlock />
      </nav>
      <nav className="header_nav_right">
        <DropdownMenu />
      </nav>
    </header>
  );
}
