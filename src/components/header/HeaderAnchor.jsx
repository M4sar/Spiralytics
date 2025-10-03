import { headerContent } from "./Header.data";
import { NavList } from "./NavList";
import "./Header.css";

export function HeaderBlock() {
  return (
    <ul>
      {headerContent.map((item, i) => (
        <NavList
          key={i}
          {...item}
          imgClass={i === 0 ? "Header__nav-img--main" : "Header__nav-img"}
          textClass={i === 0 ? "Header__nav-text--main" : "Header__nav-text"}
        />
      ))}
    </ul>
  );
}
