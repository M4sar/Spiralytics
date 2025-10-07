import { useState } from "react";
import ArchiveSubHeader from "../../components/ArchiveSubHeader/ArchiveSubHeader";
<<<<<<< HEAD
import ArchiveCharacters from "./ArchiveCharacters/ArchiveCharacters.jsx"; // импорт страницы персонажей
import ArchiveWeapons from "./ArchiveWeapons/ArchiveWeapons.jsx"; // импорт страницы персонажей
=======
import ArchiveCharacters from "./ArchiveCharacters/ArchiveCharacters";
>>>>>>> e1c6675 (fetch characters in api/charactersService.js)

export default function ArchivePage() {
  const [ArchiveActiveLink, setArchiveActiveLink] = useState("Characters");

  const renderedink = () => {
    if (ArchiveActiveLink === "Characters") {
      return <ArchiveCharacters ArchiveActiveLink={ArchiveActiveLink} />;
    } else if (ArchiveActiveLink === "Weapons") {
      return <ArchiveWeapons ArchiveActiveLink={ArchiveActiveLink} />;
    } else {
      return null;
    }
  };
  return (
    <>
<<<<<<< HEAD
      <ArchiveSubHeader
        setArchiveActiveLink={setArchiveActiveLink}
        ArchiveActiveLink={ArchiveActiveLink}
      />
      {renderedink()}
=======
      <ArchiveSubHeader />

>>>>>>> e1c6675 (fetch characters in api/charactersService.js)
      <div
        style={{
          display: "inline-block",
          width: "100%",
          color: "aliceblue",
          fontSize: "max(3.5vh, 20px)",
          textAlign: "center",
        }}
      >
        Last updates
      </div>
    </>
  );
}
