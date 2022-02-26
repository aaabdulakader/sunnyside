const menu = document.querySelector(".menu");
const menuList = document.querySelector(".menu-list");

const event = menu.addEventListener("click", function () {
  menuList.classList.toggle("hidden");
});
