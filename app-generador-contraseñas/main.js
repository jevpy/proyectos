((d) => {
  const $length = d.getElementById("length"),
    $numbers = d.getElementById("numbers"),
    $symbols = d.getElementById("symbols"),
    $btn = d.querySelector(".btn"),
    $password = d.querySelector(".password"),
    $message = d.getElementById("message");

  $btn.addEventListener("click", async (e) => {
    try {
      let lengthValue = $length.value,
        numbersChecked = !$numbers.checked,
        symbolsChecked = !$symbols.checked;

      let options = {
        method: "GET",
        headers: { "X-Api-Key": "Ga0QStmQXXSSmEGcp9OYPQ==kjNE0K1QpmL373uZ" },
      };

      let url = `https://api.api-ninjas.com/v1/passwordgenerator?length=${lengthValue}&&exclude_numbers=${numbersChecked}&&exclude_special_chars=${symbolsChecked} `;

      // const errorMessage = () => {
      //   $message.classList.remove("none");
      //   setTimeout(() => {
      //     $message.classList.add("none");
      //   }, 4000);
      // };

      if (!lengthValue || lengthValue <= 4 || lengthValue >= 31) {
        return $message.classList.replace("none", "message");
        
      } else {
        $message.classList.remove('message')
        $message.classList.add('none')
      }

      

      $btn.disabled = true;
      $btn.innerText = "Updating...";

      const res = await fetch(url, options),
        data = await res.json();

      $btn.disabled = false;
      $btn.innerText = "Generate Password";

      let password = data.random_password;

      $password.innerText = password;
    } catch (err) {
      console.log(err);
      $btn.disabled = false;
      $btn.innerText = "Try Again";
    }
  });
})(document);
