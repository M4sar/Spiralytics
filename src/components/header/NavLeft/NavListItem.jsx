// import { useEffect, useState } from "react";
import { headerContent } from "../Header.data";
import "./HeaderNavL.css";

export function NavList({
  headerImg,
  headerText,
  imgClass,
  textClass,
  firstAnchor,
  widthHide,
  iconMove,
  deleteP,
}) {
  return (
    <li className={`header__nav-listItem ${iconMove}`}>
      <a
        href=""
        className="header__nav-listAnchor"
        style={{ height: firstAnchor }}
      >
        <img src={headerImg} className={imgClass} />
        <div
          className={`Anchor-wrapper ${setTimeout(() => {
            deleteP;
          }, 1000)}`}
        >
          <p className={`${textClass} ${widthHide}`} style={{}}>
            {headerText}
          </p>
        </div>
      </a>
    </li>
  );
}
