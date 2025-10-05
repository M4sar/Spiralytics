import "./HeaderNavL.css";

export function NavList({
  headerImg,
  headerText,
  imgClass,
  textClass,
  firstAnchor,
}) {
  return (
    <li className="header__nav-listItem">
      <a
        href=""
        className="header__nav-listAnchor"
        style={{ height: firstAnchor }}
      >
        <img src={headerImg} className={imgClass} />
        <p className={textClass}>{headerText}</p>
      </a>
    </li>
  );
}
