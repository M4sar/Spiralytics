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

  if (loading) return <div>Загрузка персонажей...</div>;
  if (error) return <div>Ошибка: {error.message}</div>;

  return <></>;
}
