const $h1 = document.querySelector("container h1"),
  $p = document.querySelector(".container p"),
  $button = document.querySelector(".container button");

console.log($p, $button);

const url = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": " Ga0QStmQXXSSmEGcp9OYPQ==kjNE0K1QpmL373uZ",
  },
};

$button.addEventListener("click", async (e) => {
  try {
    $p.innerText = "Cargando...";
    $button.innerText = "Cargando";
    $button.disabled = true;

    const res = await fetch(url, options),
      data = await res.json();
    console.log(data);

    $p.innerText = data[0].joke;
    $button.innerText = "TELL ME JOKE";
    $button.disabled = false;
  } catch (err) {
    $p.innerText = "An error happened, try again later";
  }
});
