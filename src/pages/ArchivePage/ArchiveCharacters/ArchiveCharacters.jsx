<<<<<<< HEAD
import { useArchiveData } from "../../../hooks/charactersService.js";
import "./ArchiveCharacters.css";

export default function ArchiveCharacters({ ArchiveActiveLink }) {
  const { data, loading, error } = useArchiveData(ArchiveActiveLink);
=======
import fetchCharacters from "../../../api/charactersService.js";

export default function ArchiveCharacters() {
  const {
    fullCharacters,
    charId,
    charName,
    charElement,
    charWeaponType,
    charRarity,
    charIcon,
    charNamecardBG,
    loading,
    error,
  } = fetchCharacters();
>>>>>>> e1c6675 (fetch characters in api/charactersService.js)

  if (loading) return <div>Загрузка персонажей...</div>;
  if (error) return <div>Ошибка: {error.message}</div>;

<<<<<<< HEAD
  return (
    <ul className="grid-container-characters">
      {data.map((character) => (
        <li className="grid-list-characters" key={character.char_id}>
          <img
            src={`images/${character.namecard_background}`}
            className="archive-card--background"
          />
          <div className="archive-card--overlay">
            {/* Icon */}
            <img
              src={`images/${character.characters_icon}`}
              alt={`${character.name} icon`}
              className="archive-card--char-icon"
              style={{
                background: `${
                  character.rarity === 5
                    ? `-webkit-gradient(linear, left top, left bottom, from(#945c2c), to(#b27330)), linear-gradient(180deg, #945c2c, #b27330)`
                    : `-webkit-gradient(linear, left top, left bottom, from(#5e5789), to(#9c75b7)), linear-gradient(180deg, #5e5789, #9c75b7)`
                }`,
              }}
            />
            {/* Name */}
            <div
              style={{
                backgroundColor: `${
                  character.element === "Pyro"
                    ? "rgba(236, 73, 35, 0.4)"
                    : character.element === "Hydro"
                    ? "rgba(0, 191, 255, 0.4)"
                    : character.element === "Electro"
                    ? "rgba(148, 93, 196, 0.4)"
                    : character.element === "Anemo"
                    ? "rgba(53, 150, 151, 0.4)"
                    : character.element === "Cryo"
                    ? "rgba(70, 130, 180, 0.4)"
                    : character.element === "Geo"
                    ? "rgba(222, 189, 108, 0.4)"
                    : character.element === "Dendro"
                    ? "rgba(96, 138, 0, 0.4)"
                    : "rgba(147, 147, 147, 0.4)"
                }`,
              }}
              className="archive-card--char-name"
            >
              {character.name}
            </div>
            {/* rarity */}
            <div className="archive-card--char-rarity">
              {Array.from({ length: character.rarity }).map((_, index) => (
                <img
                  key={index}
                  src="images/levelStar.svg"
                  className="archive-card--char-rarity-level-star"
                />
              ))}
            </div>
            {/* element + weapon */}
            <div className="archive-card--char-ElementnWeapon">
              {/* weapon */}
              <img
                src={
                  character.weapon_type === `Bow`
                    ? `images/Weapons/Bow.svg`
                    : character.weapon_type === `Catalyst`
                    ? `images/Weapons/Catalyst.svg`
                    : character.weapon_type === `Claymore`
                    ? `images/Weapons/Claymore.svg`
                    : character.weapon_type === `Polearm`
                    ? `images/Weapons/Polearm.svg`
                    : `images/Weapons/Sword.svg`
                }
              />
              {/* element */}
              <img
                src={
                  character.element === `Anemo`
                    ? `images/Elements/Anemo.svg`
                    : character.element === `Cryo`
                    ? `images/Elements/Cryo.svg`
                    : character.element === `Electro`
                    ? `images/Elements/Electro.svg`
                    : character.element === `Geo`
                    ? `images/Elements/Geo.svg`
                    : character.element === `Hydro`
                    ? `images/Elements/Hydro.svg`
                    : character.element === `Pyro`
                    ? `images/Elements/Pyro.svg`
                    : `images/Elements/Dendro.svg`
                }
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
=======
  return <></>;
>>>>>>> e1c6675 (fetch characters in api/charactersService.js)
}
