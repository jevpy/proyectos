((d) => {
  const $nameBaby = d.getElementById("name-baby"),
  $button = d.querySelector("button"),
  $error = d.querySelector(".error"),
  $list = d.querySelector(".list");
  
  const options = {
    method: "GET",
    headers: { "X-Api-Key": "Ga0QStmQXXSSmEGcp9OYPQ==kjNE0K1QpmL373uZ" },
  };

  
  $button.addEventListener("click", async (e) => {

    const gender = $nameBaby.value

    const url = `https://api.api-ninjas.com/v1/babynames?gender=${gender}`;

    $list.classList.add("none");
    
    if (
      gender !== "girl" &&
      gender !== "boy" &&
      gender !== "neutral"
    ) {
      $error.classList.remove("none");
      return setTimeout(() => $error.classList.add("none"), 3000);
    }

    $button.disabled = true;
    $button.innerText = "UPLOADING...";

    $list.innerHTML = '<ul></ul>'
    
    const res = await fetch(url, options),
      data = await res.json();

    $list.classList.remove("none");

    $fragment = d.createDocumentFragment();
    $ul = d.createElement("ul");

    data.map((el) => {
      $li = d.createElement("li");
      $li.textContent = el;
      $fragment.appendChild($li);
    });

    $ul.appendChild($fragment);
    $list.appendChild($ul);

    $button.disabled = false;
    $button.innerText = 'GENERATE NAME'
  });
})(document);
