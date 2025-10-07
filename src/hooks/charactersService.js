// hooks/useCharacters.js
import useFetch from "./useFetch.js";

<<<<<<< HEAD
export function useArchiveData(linkType) {
  const { data, loading, error } = useFetch(
    `http://localhost:3000/${linkType}`
  );

  if (loading || error || !data) {
    return { data: [], loading, error };
  }
  return {
    data,
  };
}
// const charId = data.map((c) => c.char_id);
// const charName = data.map((c) => c.name);
// const charElement = data.map((c) => c.element);
// const charWeaponType = data.map((c) => c.weapon_type);
// const charRarity = data.map((c) => c.rarity);
// const charIcon = data.map((c) => c.characters_icon);
// const charNamecardBG = data.map((c) => c.namecard_background);
=======
export default function useCharacters() {
  const { data, loading, error } = useFetch("http://localhost:3000/characters");

  if (loading || error || !data) {
    return { charactersData: [], loading, error };
  }

  const charId = data.map((c) => c.char_id);
  const charName = data.map((c) => c.name);
  const charElement = data.map((c) => c.element);
  const charWeaponType = data.map((c) => c.weapon_type);
  const charRarity = data.map((c) => c.rarity);
  const charIcon = data.map((c) => c.characters_icon);
  const charNamecardBG = data.map((c) => c.namecard_background);

  return {
    fullCharacters: data,
    charId,
    charName,
    charElement,
    charWeaponType,
    charRarity,
    charIcon,
    charNamecardBG,
    loading,
    error,
  };
}
>>>>>>> 8b3bdd8 (fix fetch)
