import useFetch from "../../../hooks/useFetch.js";
import useCharacters from "../../../hooks/charactersService.js";

export default function ArchiveCharacters() {
  const { fullCharacters, loading, error } = useCharacters();

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <ul>
      {fullCharacters.map((character) => (
        <li key={character.char_id}>{character.name}</li>
      ))}
    </ul>
  );
}
