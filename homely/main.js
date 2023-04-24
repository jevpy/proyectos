const d = document;

const $menuBtn = d.querySelector(".menu-btn"),
  $menu = d.querySelector(".menu");

$menuBtn.addEventListener("click", (e) => {
  $menuBtn.firstElementChild.classList.toggle("none")
  $menu.classList.toggle("is-active");
  $menuBtn.lastElementChild.classList.toggle("none")
});
