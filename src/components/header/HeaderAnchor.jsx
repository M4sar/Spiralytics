import { headerContent } from "./Header.data";
import { NavList } from "./NavList";
import "./Header.css";

export function HeaderBlock() {
  return (
    <ul className="header__nav-list">
      {headerContent.map((item, i) => (
        <NavList
          key={i}
          {...item}
          imgClass={i === 0 ? "header__nav-img--main" : "header__nav-img"}
          firstAnchor={i === 0 ? "calc(100% - 6px)" : ""}
          textClass={i === 0 ? "header__nav-text--main" : "header__nav-text"}
        />
      ))}
    </ul>
  );
}
