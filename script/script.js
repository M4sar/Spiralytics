let her = document.getElementById("tits");
var theight = her.clientHeight;
var theight = theight + "px";
console.log(theight);
let lastScroll = 0;
const defaultOffset = 200;
const header = document.getElementById(header);

const scrollPosition = () =>
  window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains("hide");

window.addEventListener("scroll", () => {
  if (scrollPosition() > lastScroll && !containHide()) {
    //scroll down
    header.classList.add("hide");
    console.log("down");
  } else if (scrollPosition() < lastScroll && containHide()) {
    console.log("up");
    header.classList.remove("hide");
  }
});

lastScroll = scrollPosition();
