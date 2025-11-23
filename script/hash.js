// Хэширование наименования
function hashWord(word) {
  let hash = 0;
  for (let i = 0; i < word.length; i++) {
    hash = (hash * 31 + word.charCodeAt(i)) >>> 0; // 31 — простое число для хэширования
  }
  return hash % 1000; // оставляем число до 6 цифр
}

const word = "characters";
const number = hashWord(word);
console.log(number, word);
