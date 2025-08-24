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
const headText = document.getElementsByClassName("head-text");
const divHovHeadBlock = document.querySelectorAll(".hov-head-block");

// Найти каждый блок div from header
for (let textBlock of divHovHeadBlock) {
  textBlock.addEventListener("mouseover", (hov) => {
    const el = hov.target.getAttribute("class");

    if (el === "head-text-main" || el === "head-img-main") {
      const imgMain = textBlock.querySelector(".hov-head-block .head-img-main");
      const text = textBlock.querySelector(".hov-head-block .head-text-main");

      text.style.transform = "rotate(-0.6deg) translateY(-0.5px) scale(1.05)";
      imgMain.style.transform = "rotate(-17deg) scale(0.94)";

      textBlock.addEventListener("mouseout", () => {
        const imgMain = textBlock.querySelector(
          ".hov-head-block .head-img-main"
        );
        const text = textBlock.querySelector(".hov-head-block .head-text-main");

        text.style.transform = "rotate(0deg) translateY(0px) scale(1)";
        imgMain.style.transform = "rotate(0deg)";
      });
    }

    if (el === "head-text" || el === "head-img") {
      textBlock.addEventListener("mouseover", () => {
        const text = textBlock.querySelector(".hov-head-block .head-text");
        // const imgMain = textBlock.querySelector(".hov-head-block .head-img-main");
        const img = textBlock.querySelector(".hov-head-block .head-img");

        img.style.transform = "scale(1.1)";
        text.style.transform = "rotate(-0.6deg) translateY(-0.5px) scale(1.05)";
      });
      // При движении по блоку div изменять стиль текста внутри
      textBlock.addEventListener("mouseout", () => {
        const text = textBlock.querySelector(".hov-head-block .head-text");
        const img = textBlock.querySelector(".hov-head-block .head-img");

        img.style.transform = "scale(1)";
        text.style.transform = "rotate(0deg) translateY(0px) scale(1)";
      });
    }
  });
}

console.log($("a.head-anchor-left"));
