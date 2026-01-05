import { useArchiveData } from "../../../hooks/charactersService.js";
import "./ArchiveWeapons.css";

export default function ArchiveWeapons({ ArchiveActiveLink }) {
  const { data, loading, error } = useArchiveData(ArchiveActiveLink);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <ul className="grid-container-weapons">
      {data.map((weapon) => (
        <li
          className="grid-list-weapons"
          key={weapon.weapon_id}
          style={{
            background: `${
              weapon.rarity === 1
                ? `-webkit-gradient(linear, left top, left bottom, from(#6a6d74), to(#868586)), linear-gradient(180deg, #6a6d74, #868586)`
                : weapon.rarity === 2
                ? `-webkit-gradient(linear, left top, left bottom, from(#4b6c67), to(#519072)), linear-gradient(180deg, #4b6c67, #519072)`
                : weapon.rarity === 3
                ? `-webkit-gradient(linear, left top, left bottom, from(#567496), to(#5392b8)), linear-gradient(180deg, #567496, #5392b8)`
                : weapon.rarity === 4
                ? `-webkit-gradient(linear, left top, left bottom, from(#5e5789), to(#9c75b7)), linear-gradient(180deg, #5e5789, #9c75b7)`
                : `-webkit-gradient(linear, left top, left bottom, from(#945c2c), to(#b27330)), linear-gradient(180deg, #945c2c, #b27330)`
            }`,
          }}
        >
          {/* Icon */}
          <img
            src={`images/${weapon.weapon_icon}`}
            alt={`${weapon.name} icon`}
            className="archive-card--weap-icon"
          />
          {/* Name */}
          <div className="archive-card--weap-name">{weapon.name}</div>
          {/* rarity */}
          <div className="archive-card--weap-rarity">
            {Array.from({ length: weapon.rarity }).map((_, index) => (
              <img
                key={index}
                src="images/levelStar.svg"
                className="archive-card--weap-rarity-level-star"
              />
            ))}
          </div>
          {/* weaponType */}
          <div className="archive-card--weap-weaponType">
            <img
              style={{ height: "68.75%" }}
              src={
                weapon.weapon_type === `Bow`
                  ? `images/Weapons/Bow.svg`
                  : weapon.weapon_type === `Catalyst`
                  ? `images/Weapons/Catalyst.svg`
                  : weapon.weapon_type === `Claymore`
                  ? `images/Weapons/Claymore.svg`
                  : weapon.weapon_type === `Polearm`
                  ? `images/Weapons/Polearm.svg`
                  : `images/Weapons/Sword.svg`
              }
            />
          </div>
          {/* weaponStat (main & sub) */}
          <div className="archive-card--weap-stats">
            <div className="archive-card--weap-mainStat">
              <img
                src="images/Stats/ATK.svg"
                className="archive-card--weap-mainStat-ico"
              />
              <p>{weapon.base_dmg}</p>
            </div>
            {/* Условие для рендера subStat, если он есть */}
            {weapon.main_attribute && (
              <div className="archive-card--weap-subStat">
                <img
                  className="archive-card--weap-mainStat-ico"
                  src={
                    weapon.main_attribute === `ATK%`
                      ? `images/Stats/ATK%.svg`
                      : weapon.main_attribute === `HP%`
                      ? `images/Stats/HP%.svg`
                      : weapon.main_attribute === `DEF%`
                      ? `images/Stats/DEF%.svg`
                      : weapon.main_attribute === `CRIT Rate`
                      ? `images/Stats/CritRate.svg`
                      : weapon.main_attribute === `CRIT Rate`
                      ? `images/Stats/CritRate.svg`
                      : weapon.main_attribute === `CRIT DMG`
                      ? `images/Stats/CritDMG.svg`
                      : weapon.main_attribute === `Energy Recharge`
                      ? `images/Stats/ER.svg`
                      : weapon.main_attribute === `Elemental Mastery`
                      ? `images/Stats/EM.svg`
                      : weapon.main_attribute === `Physical DMG Bonus`
                      ? `images/Stats/PhysDMG.svg`
                      : ``
                  }
                />
                <p>
                  {weapon.sub_stat < 1
                    ? (weapon.sub_stat * 100).toFixed(1) + "%"
                    : weapon.sub_stat}{" "}
                </p>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
