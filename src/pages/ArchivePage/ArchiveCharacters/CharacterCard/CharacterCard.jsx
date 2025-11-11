import { useCharacters } from "../../../../hooks/charactersService.js";
import "./CharacterCard.css";

export default function CharacterCard() {
  const { data, loading, error } = useCharacters();

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

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
              className="archive-card--icon"
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
              className="archive-card--name"
            >
              {character.name}
            </div>
            {/* rarity */}
            <div className="archive-card--rarity">
              <img
                src="images/levelStar.png"
                className="archive-card--rarity-level-star"
              />
              <img
                src="images/levelStar.png"
                className="archive-card--rarity-level-star"
              />
              <img
                src="images/levelStar.png"
                className="archive-card--rarity-level-star"
              />
              <img
                src="images/levelStar.png"
                className="archive-card--rarity-level-star"
              />
              {character.rarity === 5 ? (
                <img
                  src="images/levelStar.png"
                  className="archive-card--rarity-level-star"
                />
              ) : null}
            </div>
            {/* element + weapon */}
            <div className="archive-card--ElementnWeapon">
              {/* weapon */}
              <img
                src={
                  character.weapon_type === `Bow`
                    ? `images/Weapons/Bow.png`
                    : character.weapon_type === `Catalyst`
                    ? `images/Weapons/Catalyst.png`
                    : character.weapon_type === `Claymore`
                    ? `images/Weapons/Claymore.png`
                    : character.weapon_type === `Polearm`
                    ? `images/Weapons/Polearm.png`
                    : `images/Weapons/Sword.png`
                }
              />
              {/* element */}
              <img
                src={
                  character.element === `Anemo`
                    ? `images/Elements/Anemo.png`
                    : character.element === `Cryo`
                    ? `images/Elements/Cryo.png`
                    : character.element === `Electro`
                    ? `images/Elements/Electro.png`
                    : character.element === `Geo`
                    ? `images/Elements/Geo.png`
                    : character.element === `Hydro`
                    ? `images/Elements/Hydro.png`
                    : character.element === `Pyro`
                    ? `images/Elements/Pyro.png`
                    : `images/Elements/Dendro.png`
                }
              />
              {/* <div
                style={{
                  backgroundColor: "red",
                  gridColumn: "1/2  ",
                }}
              ></div> */}
              {/* <div
                style={{
                  backgroundColor: "blue",
                  gridColumn: "2/3  ",
                }}
              ></div> */}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
