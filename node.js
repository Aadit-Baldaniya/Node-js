// const value = require("./module");
const { Aadit } = require("./module");
// import value, { Aadit, Akash, Ansh } from "./module.js";
console.log(Aadit);
let api = { name: "Aadi", id: "02" };
const data = [
  { name: "Aadi", id: "02" },
  { name: "Aadit", id: "03" },
];
function name(a, b) {
  return a + b;
}
const map = [
  {
    id: "01",
    title: "City Of India",
    img: "https://www.google.com/imgres?q=mumbai%20bridge%20at%20night&imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Ff1%2Fb3%2F9b%2Ff1b39b75c73e1f7bd7ecebbdd3b136a1.jpg&imgrefurl=https%3A%2F%2Fin.pinterest.com%2Fpin%2F838936236837470152%2F&docid=5nlgF8iX_LCzSM&tbnid=rGt6ND6Vgydq7M&vet=12ahUKEwj7iI_bqNqGAxW7sVYBHffiAZMQM3oECFIQAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwj7iI_bqNqGAxW7sVYBHffiAZMQM3oECFIQAA",
    city: "Mumbai",
  },
  {
    id: "02",
    title: "City Of India",
    img: "https://www.google.com/imgres?q=mumbai%20bridge%20at%20night&imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Ff1%2Fb3%2F9b%2Ff1b39b75c73e1f7bd7ecebbdd3b136a1.jpg&imgrefurl=https%3A%2F%2Fin.pinterest.com%2Fpin%2F838936236837470152%2F&docid=5nlgF8iX_LCzSM&tbnid=rGt6ND6Vgydq7M&vet=12ahUKEwj7iI_bqNqGAxW7sVYBHffiAZMQM3oECFIQAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwj7iI_bqNqGAxW7sVYBHffiAZMQM3oECFIQAA",
    city: "surat",
  },
  {
    id: "03",
    title: "City Of India",
    img: "https://www.google.com/imgres?q=mumbai%20bridge%20at%20night&imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Ff1%2Fb3%2F9b%2Ff1b39b75c73e1f7bd7ecebbdd3b136a1.jpg&imgrefurl=https%3A%2F%2Fin.pinterest.com%2Fpin%2F838936236837470152%2F&docid=5nlgF8iX_LCzSM&tbnid=rGt6ND6Vgydq7M&vet=12ahUKEwj7iI_bqNqGAxW7sVYBHffiAZMQM3oECFIQAA..i&w=1280&h=720&hcb=2&ved=2ahUKEwj7iI_bqNqGAxW7sVYBHffiAZMQM3oECFIQAA",
    city: "Goa",
  },
];
console.log(
  map.filter((value) => {
    return value;
  })
);
console.log("Aadit", Aadit);
