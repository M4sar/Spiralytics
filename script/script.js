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
      const character_card_archive = document.createElement("div"); // создаем элемент
      character_card_archive.className = "character_card_archive"; // добавляем класс
      character_card_archive.setAttribute(
        // добавляем стиль
        "style",
        `background-image: url(${character.namecard_background})`
      );

      container.appendChild(character_card_archive);
    });
  })
  .catch((err) => console.error(err));
