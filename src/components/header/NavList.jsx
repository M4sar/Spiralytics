import "./Header.css";

export function NavList({ headerImg, headerText, imgClass, textClass }) {
  return (
    <li>
      <a href="">
        <img src={headerImg} className={imgClass} />
        <p className={textClass}>{headerText}</p>
      </a>
    </li>
  );
}
