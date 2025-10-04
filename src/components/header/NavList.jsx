import "./Header.css";

export function NavList({
  headerImg,
  headerText,
  imgClass,
  textClass,
  firstAnchor,
}) {
  return (
    <li className="header__nav-element">
      <a href="" className="header__nav-anchor" style={{ height: firstAnchor }}>
        <img src={headerImg} className={imgClass} />
        <p className={textClass}>{headerText}</p>
      </a>
    </li>
  );
}
