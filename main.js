const toggleBtn = document.querySelector(".navbar_toggleBtn");
const menu = document.querySelector(".navbar_menu");
const login = document.querySelector(".navbar_login");
const h1 = document.querySelector(".new_menu h1");
const ul = document.querySelector(".new_menu ul");
const p = document.querySelector(".article2_p");
const span = document.querySelector("span");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  login.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  if (value > 140) {
    h1.style.animation = "disappear 1s ease-out forwards";
    ul.style.animation = "disappear 1s ease-out forwards";
  } else {
    h1.style.animation = "slide-leftToRight 1s ease-out";
    ul.style.animation = "slide-leftToRight 1s ease-out";
  }
});

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  console.log("scroll", value);
  if (value > 480) {
    p.style.animation = "fadeIn 2s ease-in forwards";
  }
});

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  if (value > 790) {
    span.style.animation = "fadeIn 2s ease-in forwards";
  }
});
