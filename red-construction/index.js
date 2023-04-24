((d) => {
  const $menu = d.querySelector(".menu"),
    $menuBtn = d.querySelector(".btn-hamburguer");

  $menuBtn.addEventListener("click", (e) => {
    $menuBtn.firstElementChild.classList.toggle("none");
    $menuBtn.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    $menuBtn.firstElementChild.classList.remove("none");
    $menuBtn.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);

((d) => {
  /* ********** Header Scroll********** */
  const $header = d.querySelector(".header");

  d.addEventListener("scroll", (e) => {
    // $header.style.marginTop = ".5rem";

    if (window.pageYOffset > 0) {
      $header.classList.add("header-mov");
    } else {
      $header.classList.remove("header-mov");
    }
  });
})(document);
