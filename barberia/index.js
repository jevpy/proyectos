
((d) => {
  const $navbar = d.querySelector(".navbar"),
    $menuBtn = d.querySelector(".btn-hamburguer");

  $menuBtn.addEventListener("click", (e) => {
    $menuBtn.firstElementChild.classList.toggle("none");
    $menuBtn.lastElementChild.classList.toggle("none");
    $navbar.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    $menuBtn.firstElementChild.classList.remove("none");
    $menuBtn.lastElementChild.classList.add("none");
    $navbar.classList.remove("is-active");
  });
})(document);
