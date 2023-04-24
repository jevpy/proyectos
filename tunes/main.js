((d) => {
  const $menuBtn = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu-container");

  $menuBtn.addEventListener("click", () => {
    $menuBtn.lastElementChild.classList.toggle("none");
    $menuBtn.firstElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  console.log($menu);

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return;

    $menuBtn.firstElementChild.classList.remove("none");
    $menuBtn.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);
