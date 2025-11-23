import "./ArchiveSubHeader.css";

export default function ArchiveSubHeader({ setArchiveActiveLink }) {
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
          <button
            key={link}
            className={className}
            onClick={(e) => {
              e.preventDefault();
              setArchiveActiveLink(link);
            }}
          >
            {link}
          </button>
        );
      })}
    </div>
  );
}
