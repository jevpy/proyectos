/* ********** Menu Hamburguesa ********** */
((d) => {
  const $menuBamburguer = d.querySelector(".menu-hamburguer"),
    $menuHead = d.querySelector(".menu-head");

  $menuBamburguer.addEventListener("click", (e) => {
    $menuBamburguer.firstElementChild.classList.toggle("none");
    $menuBamburguer.lastElementChild.classList.toggle("none");
    $menuHead.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu-head a")) return false;

    $menuBamburguer.firstElementChild.classList.remove("none");

    $menuBamburguer.lastElementChild.classList.add("none");

    $menuHead.classList.remove("is-active");
  });
})(document);



