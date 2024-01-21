// let date = new Date();

// let month = date.getMonth();
// console.log(month);

// const color = (event) => (event.target.style.backgroundcolor = "green");
// const button = document
// try {
//   const button = document
//     .getElementById("button")
//     .addEventListener(
//       "click",
//       (event) => (event.target.style.backgroundcolor = "green")
//     );
// } catch (error) {
//   console.log("problem");
// }

// console.log(event);

// button != null ? console.log(button.value) : console.log("ther is a prob");
// const button = document.getElementById("button1");
// button.textContent = "start";
// const button = document.getElementById("button2");
// button.textContent = "stop";

/*start here */
// function test(event) {
//   console.log(event);
// }
// const start = document.querySelector("#button1");
// const stop = document.querySelector("#button2");
// const counter = document.querySelector("#p");
// const date = new Date();
// counter.textContent = date.getHours();

// const startchrono = () => {
//   let tess = counter.textContent;
//   tess = Number(tess);
//   tess += 1;
//   counter.textContent = tess;
//   setTimeout(startchrono, 1000);
// };
// const resetchrono = () => {
//   counter.textContent = 0;
// };

// const stopchrono = () => {};

// start.addEventListener("click", startchrono);
// stop.addEventListener("click", resetchrono);

// const timeout = setTimeout(() => window.alert("hello"), 1000);

// clearTimeout(timeout);

// const list = [1, 3, 5, 8];
// console.log(...list);

// let name = window.prompt("enter your name");
// console.log(name);
// const h1 = document.createElement("h1");
// h1.textContent = "HELOO DARLKHIR";
// document.querySelector(".content").prepend(h1);
// ²

// console.log("HELLO DARLKHIR");

// function somme(x, y, callback) {
//   let result = x + y;
//   callback(result);
// }

// function print(sum) {
//   console.log(sum);
// }

// somme(1, 10, print);

// const btn = document.getElementById("button-aff");

// btn.addEventListener("click", function () {
//   alert("bonn clique!!!!");
// });

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const counter = document.querySelector("#p");

const start = function () {
  let text = counter.textContent;
  text = Number(text);
  text = text + 1;
  counter.textContent = text;
  setTimeout(start, 1000);
};
const reset = function () {
  counter.textContent = 0;
};

button1.addEventListener("click", start);
button2.addEventListener("click", reset);
