const fs = require("fs");
const path = require("path");
const pathToFolder = path.resolve(
  path.join(
    "C:",
    "Rolling scopes",
    "2021q3",
    "HTML-builder",
    "03-files-in-folder",
    "secret-folder"
  )
);
fs.readdir(pathToFolder, { withFileTypes: true }, (err, files) => {
  if (err) console.log(err);
  else {
    //  console.log(files);
    files.forEach((file) => {
      fs.stat(
        path.resolve(path.join(pathToFolder, file.name)),
        (error, stats) => {
          if (error) {
            console.log(error);
          } else {
            if (stats.isFile()) {
              console.log(
                `${path.basename(
                  path.join(pathToFolder, file.name),
                  path.extname(file.name)
                )}-${path.extname(file.name).slice(1)}-${stats.size}b`
              );
            }
          }
        }
      );
    });
  }
});
