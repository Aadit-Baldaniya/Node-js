const fs = require("fs");
const path = require("path");
const pathName = path.join(__dirname, "nodeChe", "Node", "Aadi.text");

fs.writeFileSync(pathName, "This is text file and write a impotence data");
fs.readFile(pathName, (data, error) => {
  console.log(error.toString());
});

// fs.writeFile(
//   pathName,
//   "This is text file and write a impotence data",
//   (error) => {
//     console.log("error", error);
//   }
// );

// const fs = require("fs");
// // const textFile = fs.writeFileSync("text.txt", "Aadit Baldaniya Visit a Surat");
// const textFile = fs.writeFileSync(
//   "text.txt",
//   "Name:Aadit Baldaniya Visit a Surat"
// );
// fs.appendFileSync("text.txt", "Aadit Baldaniya Visit Dwarka");
// const reade = fs.readFileSync("text.txt");
// const string = reade.toString();
// const changname = fs.renameSync("nodeChe/aadi.js", "nodeChe/aadit.js");
