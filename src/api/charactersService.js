import useFetch from "../hooks/useFetch";

export default function fetchCharacters() {
  const { data, loading, error } = useFetch("http://localhost:3000/characters");

  if (loading || error || !data) {
    // Возвращаем состояния загрузки/ошибки или пустой массив
    return {
      charactersData: [],
      loading: loading,
      error: error,
    };
  }

  // 1. Создаем массивы из нужных констант
  const charId = data.map((character) => character.char_id);
  const charName = data.map((character) => character.name);
  const charElement = data.map((character) => character.element);
  const charWeaponType = data.map((character) => character.weapon_type);
  const charRarity = data.map((character) => character.rarity);
  const charIcon = data.map((character) => character.characters_icon);
  const charNamecardBG = data.map((character) => character.namecard_background);

  // 2. Возвращаем как полный массив данных, так и отдельные массивы констант
  return {
    // Основные данные (полный массив объектов)
    fullCharacters: data,

    // Отдельные массивы констант
    charId,
    charName,
    charElement,
    charWeaponType,
    charRarity,
    charIcon,
    charNamecardBG,

    // Статусы
    loading: loading,
    error: error,
  };
}
