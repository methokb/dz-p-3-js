const inp = document.querySelector("#input");
const btn = document.querySelector("#btn");

const button = document.querySelector(".button");
const input = document.querySelector(".input");

let age = 16;

button.addEventListener("click", () => {
  let time = new Promise((resolve, reject) => {
    if (age == input.value) {
      resolve("True");
    } else {
      reject("False");
    }
  })
    .then((resolve) => console.log(resolve))
    .catch((reject) => console.log(reject));
});

let word = "JavaScript";

btn.addEventListener("click", () => {
  let check = new Promise((resolve, reject) => {
    if (inp.value == 10) {
      alert("Вы угадали");
    } else {
      alert("Не правильно");
    }
  });
});
