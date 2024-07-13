const Eventemitter = require("events");
const emitter = new Eventemitter();

let Totalcake = 5;
let totalMoney = 5000;
emitter.on("empty", () => {
  emitter.emit("CakeShop Refile", 5);
});
emitter.on("CakeShop", () => {
  if (Totalcake > 0) {
    Totalcake--;
    totalMoney += 500;
    console.log("CakeOrder list", Totalcake, totalMoney);
  } else {
    emitter.emit("empty");
  }
});
emitter.on("CakeShop Refile", (number) => {
  const total = number * 500;
  if (totalMoney >= total) {
    Totalcake += number;
    totalMoney -= total;
    console.log("CakeRefile list", Totalcake, totalMoney);
  }
});

emitter.emit("CakeShop");
emitter.emit("CakeShop");
emitter.emit("CakeShop");
emitter.emit("CakeShop");
emitter.emit("CakeShop");
emitter.emit("CakeShop");

// emitter.emit("CakeShop Refile", 5);

// const Eventemitter = require("events");

// const emitter = new Eventemitter();
// let total = 0;
// emitter.on("pizza-orderlist", (totalpizza) => {
//   total++;
//   if (total >= 6) {
//     console.log(`pizza-orderlist ${totalpizza}`, total);
//   } else {
//     console.log("minimum 6 pizza order");
//   }
// });

// emitter.emit("pizza-orderlist", "total 10");
// emitter.emit("pizza-orderlist");
// emitter.emit("pizza-orderlist");
// emitter.emit("pizza-orderlist");
// emitter.emit("pizza-orderlist");
// emitter.emit("pizza-orderlist");
// emitter.emit("pizza-orderlist");
