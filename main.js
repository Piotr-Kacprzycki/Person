const logoJs = document.querySelector("#logoJs");
const body = document.querySelector("body");

const colors = [
  "red",
  "blue",
  "green",
  "white",
  "yellow",
  "orange",
  "grey",
  "pink",
  "brown",
  "olive",
  "teal",
];

body.addEventListener("mousemove", () => {
  for (let i = 0; i <= colors.length; i++) {
    let number = 0;
    setInterval(() => {
      let shadowNumber = Math.floor(Math.random() * colors.length);

      number += shadowNumber;

      logoJs.style.boxShadow = `10px 20px 20px ${colors[number++]}`;
    }, 1200);
  }
});
