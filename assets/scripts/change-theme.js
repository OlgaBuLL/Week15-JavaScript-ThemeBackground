function changeTheme() {
  switch (document.getElementById("theme-option").value) {
    case "dark":
      document.getElementById("theme").style.background = "rgb(65, 68, 65)";
      break;

    case "standard":
      document.getElementById("theme").style.background = "white";
      break;

    case "beige":
      document.getElementById("theme").style.background = "rgb(240, 208, 149)";
      break;

    case "gradient":
      document.getElementById("theme").style.background =
        "linear-gradient(45deg, lightgoldenrodyellow, lightgreen)";
      break;
  }
}

function checkData() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;

  document.getElementById("errorMessage").innerHTML = "";

  if (name === "") {
    document.getElementById("errorMessage").innerHTML += "Имя не заполнено<br>";
  }
  if (phone.length <= 5) {
    document.getElementById("errorMessage").innerHTML +=
      "Недостаточно символов в номере телефона<br>";
  }
  if (phone === "[a-z]") {
    document.getElementById("errorMessage").innerHTML +=
      "Недопустимый символ<br>";
  }

  if (email === "") {
    document.getElementById("errorMessage").innerHTML +=
      "E-mail не заполнен<br>";
  } else {
    document.getElementById(
      "successMessage"
    ).innerHTML = `${name}, ваша заявка принята!<br>Мы вам перезвоним!`;
  }
}

document.getElementById("claim").onclick = function () {
  document.querySelector(".form").scrollIntoView({ behavior: "smooth" });
};
