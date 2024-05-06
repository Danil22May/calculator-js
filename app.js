const screen = document.querySelector("#screen");
const numbers = document.querySelectorAll(".numbers");
const num1 = document.getElementById("1");
const num2 = document.getElementById("2");
const num3 = document.getElementById("3");
const num4 = document.getElementById("4");
const num5 = document.getElementById("5");
const num6 = document.getElementById("6");
const num7 = document.getElementById("7");
const num8 = document.getElementById("8");
const plus = document.getElementById("+");
const result = document.getElementById("=");
const c = document.getElementById("C");

// numbers.forEach((number) => {
//   console.log(number.textContent);
// });

num1.addEventListener("click", () => {
  screen.value += 1;
});
num2.addEventListener("click", () => {
  screen.value += 2;
});
plus.addEventListener("click", () => {
  screen.value += "+";
});
c.addEventListener("click", () => {
  screen.value = "";
});
result.addEventListener("click", () => {
  screen.value = eval(screen.value);
});

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((json) => console.log(json));

