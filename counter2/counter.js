const buttons = document.querySelectorAll(".btn");
const counterValue = document.querySelector(".counter span");
console.log(buttons, counterValue);
let count = 0;
buttons.forEach((btn) => {
  console.log(btn);
  btn.addEventListener("click", () => {
    const classList = btn.classList;
    if (classList.contains("increment")) count++;
    else if (classList.contains("deccrement") && count > 0) count--;
    else count = 0;
    counterValue.textContent = count;
    counterValue.style.color = "blueviolet";
  });
});
