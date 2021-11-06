const fs = require("fs");
const path = require("path");
const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

const EventEmitter = require("events");

const emitter = new EventEmitter();

// const EventEmitter = require("events");
// const readStream = fs.createReadStream();
// const writeStream = fs.createWriteStream();
// const emitter = new EventEmitter();

const data = "";
fs.writeFile("./02-write-file/textFile.txt", data, () => {});
const pathToFile = path.resolve(
  path.join(
    "C:",
    "Rolling scopes",
    "2021q3",
    "HTML-builder",
    "02-write-file",
    "textFile.txt"
  )
);

const rl = readline.createInterface({ input, output });

rl.question("You can write your text ", (text) => {
  fs.writeFile(pathToFile, text, () => {});
});
const readStream = fs.createReadStream(pathToFile);
const writeStream = fs.createWriteStream(pathToFile);
// emitter.on("event1", (text) => {
//   writeStream.write(text);
// });

rl.on("line", (line) => {
  if (line === "exit") {
    console.log("goodbye!!");

    rl.close();
    return;
  }
  fs.appendFile(pathToFile, line, (err) => {});
});

// rl.on("line", (line) => {
//   writeStream.write(line);
// });

rl.on("SIGINT", () => {
  console.log("goodbye!!");
  rl.pause();
});
