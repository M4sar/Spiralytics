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
const divHovHeadBlock = document.querySelectorAll(".header__link--left_block");

for (let textBlock of divHovHeadBlock) {
  textBlock.addEventListener("mouseover", (hov) => {
    const el = hov.target.getAttribute("class");

    if (el === "head-text-main" || el === "head-img-main") {
      const imgMain = textBlock.querySelector(
        ".header__link--left_block .head-img-main"
      );
      const text = textBlock.querySelector(
        ".header__link--left_block .head-text-main"
      );

      text.style.transform = "rotate(-0.4deg) translateY(-0.5px) scale(1.03)";
      imgMain.style.transform = " scale(1.02)";

      textBlock.addEventListener("mouseout", () => {
        text.style.transform = "rotate(0deg) translateY(0px) scale(1)";
        imgMain.style.transform = "rotate(0deg)";
      });
    }

    if (el === "head-text" || el === "head-img") {
      const text = textBlock.querySelector(
        ".header__link--left_block .head-text"
      );
      const img = textBlock.querySelector(
        ".header__link--left_block .head-img"
      );

      text.style.transform = "rotate(-0.5deg) translateY(-0.5px) scale(1.03)";
      img.style.transform = "scale(1.07)";

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
      character_card_archive.classList.add("character_card_archive"); // добавляем класс для карточки персонажа

      const background = document.createElement("img"); // создаем элемент для background
      background.classList.add("character-background-card-archive"); // добавляем класс для background
      // условие для добавления background в карточку персонажа
      if (character.name === "Traveler" || character.name === "Nefer") {
        background.setAttribute(
          "src",
          "static/images/Background/background_0.png"
        ); // добавляем background для путешественника + нововышедшие 5*
        character_card_archive.appendChild(background);
        // } else if (character.name === "Aina") {
        //   character_card_archive.style.backgroundImage =
        //     "linear-gradient(to bottom right, #5d5794, #a576c6)"; // добавляем background для нововышедших 4*
      } else if (character.name === "Kachina") {
        background.setAttribute(
          "src",
          "static/images/Namecard_Background_Kachina.png"
        ); // добавляем background для Kachina
        character_card_archive.appendChild(background);
      } else {
        background.setAttribute("src", character.namecard_background); // добавляем background для остальных персонажей
        character_card_archive.appendChild(background);
      }

      container.appendChild(character_card_archive); // вставить карточку персонажа

      const character_card_inside = document.createElement("div"); // создаем контейнер содержимого карточки
      character_card_inside.setAttribute("style", "display: grid"); // добавляем стиль display: grid

      character_card_archive.appendChild(character_card_inside); // вставить контейнер содержимого карточки

      const character_icon = document.createElement("img");
      character_icon.classList.add("character-icon-card-archive");
      character_icon.setAttribute("id", character.char_id); // добавляем id персонажа

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

    const charIconTop = document.querySelector(
      ".character-icon-card-archive"
    ).offsetTop; // Получить отступ сверху
    document.querySelectorAll(".character-icon-card-archive").style.left =
      charIconTop + "px"; // Применить отступ сверху к стилю left
    const char_name = document.createElement("p");
    char_name.textContent = character.name; // добавляем имя персонажа
    console.log(character.characters_icon);
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
