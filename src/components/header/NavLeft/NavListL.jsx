import { headerContent } from "../Header.data";
import { NavList } from "./NavListItem";
import "./HeaderNavL.css";

export function NavListL() {
  return (
    <ul className="header__nav-list">
      {headerContent.map((item, i) => (
        <NavList
          key={i}
          {...item}
          imgClass={
            i === 0 ? "header__navLeft__img--main" : "header__navLeft__img"
          }
          textClass={
            i === 0 ? "header__navLeft__text--main" : "header__navLeft__text"
          }
          firstAnchor={i === 0 ? "calc(100% - 6px)" : ""}
        />
      ))}
    </ul>
  );
}
