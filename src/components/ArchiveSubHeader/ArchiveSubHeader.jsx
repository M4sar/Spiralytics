import "./ArchiveSubHeader.css";

<<<<<<< HEAD
export default function ArchiveSubHeader({ setArchiveActiveLink }) {
=======
export default function ArchiveSubHeader() {
>>>>>>> e1c6675 (fetch characters in api/charactersService.js)
  const linkList = [
    "Characters",
    "Weapons",
    "Artifacts",
    "Enemies",
    "Materials",
  ];
<<<<<<< HEAD
=======

>>>>>>> e1c6675 (fetch characters in api/charactersService.js)
  return (
    <div className="archive-subHeader">
      {linkList.map((link, i) => {
        let className = "archive-subHeader__link";

        if (i === 0) className += " first-link";
        else if (i === linkList.length - 1) className += " last-link";

        return (
<<<<<<< HEAD
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
=======
          <a key={link} className={className} href="">
            {link}
          </a>
>>>>>>> e1c6675 (fetch characters in api/charactersService.js)
        );
      })}
    </div>
  );
}
