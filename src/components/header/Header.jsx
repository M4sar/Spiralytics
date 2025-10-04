import { HeaderBlock } from "./HeaderAnchor";
import "./Header.css";
import DropdownMenu from "./DropdownMenu";

export function Header() {
  return (
    <header className="header-main">
      <nav className="header__nav">
        <HeaderBlock />
      </nav>
      <nav>
        <DropdownMenu />
      </nav>
    </header>
  );
}
