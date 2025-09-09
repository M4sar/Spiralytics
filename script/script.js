//
//
// Смена темы
const chanhgeTheme = document.getElementById("chanhgeTheme");
const background = document.getElementById("background");
const imgToggleTheme = document.getElementById("imgToggleTheme");
// При клике - заменить класс для background & сменить alt
chanhgeTheme.addEventListener("click", () => {
  if (imgToggleTheme.getAttribute("alt") === "dark_theme") {
    background.classList.toggle("site-background-light");
    background.classList.toggle("site-background-dark");
    imgToggleTheme.setAttribute("src", "static/images/light_theme.png");
    imgToggleTheme.setAttribute("alt", "light_theme");
    console.log("hello");
  } else {
    imgToggleTheme.setAttribute("src", "static/images/dark_theme.png");
    imgToggleTheme.setAttribute("alt", "dark_theme");
    background.classList.toggle("site-background-light");
    background.classList.toggle("site-background-dark");
    console.log("bye");
  }
});

//
//
// Анимация заголовков в header
const divHovHeadBlock = document.querySelectorAll(".hov-head-block");

for (let textBlock of divHovHeadBlock) {
  textBlock.addEventListener("mouseover", (hov) => {
    const el = hov.target.getAttribute("class");

    if (el === "head-text-main" || el === "head-img-main") {
      const imgMain = textBlock.querySelector(".hov-head-block .head-img-main");
      const text = textBlock.querySelector(".hov-head-block .head-text-main");

      text.style.transform = "rotate(-0.6deg) translateY(-0.5px) scale(1.05)";
      imgMain.style.transform = " scale(0.97)";

      textBlock.addEventListener("mouseout", () => {
        text.style.transform = "rotate(0deg) translateY(0px) scale(1)";
        imgMain.style.transform = "rotate(0deg)";
      });
    }

    if (el === "head-text" || el === "head-img") {
      const text = textBlock.querySelector(".hov-head-block .head-text");
      const img = textBlock.querySelector(".hov-head-block .head-img");

      text.style.transform = "rotate(-0.6deg) translateY(-0.5px) scale(1.05)";
      img.style.transform = "scale(1.1)";

      textBlock.addEventListener("mouseout", () => {
        img.style.transform = "scale(1)";
        text.style.transform = "rotate(0deg) translateY(0px) scale(1)";
      });
    }
  });
}

// Добавление карточек персонажей из базы данных
fetch("http://localhost:3000/characters")
  .then((res) => res.json())
  .then((data) => {
    const container = document.querySelector("div.grid-container-characters"); // получаем контейнер
    data.forEach((character) => {
      const character_card_archive = document.createElement("div"); // создаем карточку персонажа
      character_card_archive.classList.add("character_card_archive");
      if (
        character.name === "Traveler" ||
        character.name === "Nefer" ||
        character.name === "Lauma" ||
        character.name === "Flins" ||
        character.name === "Aina"
      ) {
        character_card_archive.style.backgroundImage =
          "linear-gradient(to bottom right,#695453,#e6ac5480)"; // добавляем background для путешественника
      } else if (character.name === "Kachina") {
        character_card_archive.style.backgroundImage =
          "url('static/images/Namecard_Background_Kachina.png')"; // добавляем background для Kachina
      } else {
        character_card_archive.style.backgroundImage =
          "url(" + character.namecard_background + ")"; // добавляем background для остальных персонажей
      }
      container.appendChild(character_card_archive); // вставить карточку персонажа с background

      const character_card_inside = document.createElement("div"); // создаем контейнер содержимого карточки
      character_card_inside.setAttribute("style", "display: grid"); // добавляем стиль display: grid

      character_card_archive.appendChild(character_card_inside); // вставить контейнер содержимого карточки

      const character_icon = document.createElement("img");
      character_icon.classList.add("character-icon-card-archive");

      if (character.name === "Aloy") {
        character_icon.src = "static/images/Aloy_icon.png"; // добавляем иконку персонажа Aloy
      } else if (character.name === "Nefer") {
        character_icon.src =
          "https://homdgcat.wiki/homdgcat-res/Avatar/UI_AvatarIcon_Nefer.png"; // добавляем иконку персонажа Nefer
      } else {
        character_icon.src = character.characters_icon; // добавляем иконку для остальных персонажей
      }

      character_card_inside.appendChild(character_icon); // вставить иконку персонажа в контейнер
    });
  })
  .catch((err) => console.error(err));

// Обратный порядок карточек персонажей
const grid = document.querySelector(".grid-container-characters");
const observer = new MutationObserver(() => {
  const items = Array.from(grid.children);
  if (items.length > 0) {
    items.reverse().forEach((item) => grid.appendChild(item));
    observer.disconnect(); // отключаем observer, больше не нужен
  }
});
observer.observe(grid, { childList: true });
