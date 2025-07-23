let btns = document.querySelectorAll(".btn");

let themeElement = document.documentElement;
console.log(themeElement);
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("btn-1")) {
      themeElement.style.setProperty("--theme-color", "rgb(0, 191, 255)");
    } else if (btn.classList.contains("btn-2")) {
      themeElement.style.setProperty("--theme-color", "rgb(220, 20, 20)");
    } else if (btn.classList.contains("btn-3")) {
      themeElement.style.setProperty("--theme-color", "rgb(255, 215, 0)");
    } else  {
      themeElement.style.setProperty("--theme-color", "rgb(255, 20, 147)");
    }
  });
});
