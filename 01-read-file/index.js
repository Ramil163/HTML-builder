const fs = require("fs");
const path = require("path");
// const pathOfTxt = path.join(
//   "C:Rolling scopes",
//   "2021q3",
//   "HTML-builder",
//   "01-read-file",
//   "text.txt"
// );
const pathOfTxt = path.resolve(
  path.join(
    "C:",
    "Rolling scopes",
    "2021q3",
    "HTML-builder",
    "01-read-file",
    "text.txt"
  )
  // "C:Rolling scopes",
  // "2021q3",
  // "HTML-builder",
  // "01-read-file",
  //   "C:/Rolling scopes/2021q3/HTML-builder/01-read-file/text.txt"
);
// path.join("C:Rolling scopes", "2021q3HTML-builder", "01-read-file", "text.txt");

const EventEmitter = require("events");
const readStream = fs.createReadStream(pathOfTxt);
// console.log(readStream);

const emitter = new EventEmitter();

emitter.on("event1", (readStream) => {
  readStream.on("data", (chunk) => {
    console.log(chunk.toString());
  });
});

emitter.emit("event1", readStream);

// readStream.on("data", (chunk) => {
//   console.log(chunk.toString());
// });
