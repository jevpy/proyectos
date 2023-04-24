((d) => {
  const $menuBtn = d.querySelector(".menu-btn"),
    $container = d.querySelector(".container");

  $menuBtn.addEventListener("click", () => {
    $menuBtn.lastElementChild.classList.toggle("none");
    $menuBtn.firstElementChild.classList.toggle("none");
    $container.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return;

    $menuBtn.firstElementChild.classList.remove("none");
    $menuBtn.lastElementChild.classList.add("none");
    $container.classList.remove("is-active");
  });
})(document);
