const modeButton = document.getElementById("mode-button");
const body = document.querySelector("body");
const modeImg = document.querySelector(".mode-icon");

modeButton.addEventListener("click", () => {
  const darkModeExists = body.classList.contains("dark-mode");

  body.classList.toggle("dark-mode");

  if (darkModeExists) {
    modeImg.setAttribute("src", "./src/images/moon.png");
  } else {
    modeImg.setAttribute("src", "./src/images/sun.png");
  }
});
