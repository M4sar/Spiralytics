import { headerContent } from "../Header.data";
import { NavList } from "./NavListItem";
import { useEffect, useState } from "react";
import "./HeaderNavL.css";

export function NavListL() {
  const [hideText, setHideText] = useState(false);

  useEffect(() => {
    const handleResize = () => setHideText(window.innerWidth < 1440);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          widthHide={i !== 0 && hideText ? "header__navLeft__text-hidden" : ""}
          iconMove={
            i !== 0 && i === 2 && hideText
              ? "header__navLeft__iconMove1"
              : i !== 0 && i === 3 && hideText
              ? "header__navLeft__iconMove2"
              : i !== 0 && i === 4 && hideText
              ? "header__navLeft__iconMove3"
              : ""
          }
          deleteP={i !== 0 && hideText ? "header__navLeft__text-delete" : ""}
        />
      ))}
    </ul>
  );
}
