import useFetch from "../../../hooks/useFetch.js";
import { useState, useEffect } from "react";

function Characters() {
  const { data, loading, error } = useFetch("http://localhost:3000/characters");

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <ul>
      {data.map((character) => (
        <li key={character.char_id}>{character.name}</li>
      ))}
    </ul>
  );
}

export default Characters;
