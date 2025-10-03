import "./Header.css";

export function NavList({ headerImg, headerText, imgClass, textClass }) {
  return (
    <li>
      <img src={headerImg} className={imgClass} />
      <p className={textClass}>{headerText}</p>
    </li>
  );
}
