import "./ArchiveSubHeader.css";

export default function ArchiveSubHeader() {
  const linkList = [
    "Characters",
    "Weapons",
    "Artifacts",
    "Enemies",
    "Materials",
  ];

  return (
    <div className="archive-subHeader">
      {linkList.map((link, i) => {
        let className = "archive-subHeader__link";

        if (i === 0) className += " first-link";
        else if (i === linkList.length - 1) className += " last-link";

        return (
          <a key={link} className={className} href="">
            {link}
          </a>
        );
      })}
    </div>
  );
}
