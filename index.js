const fs = require("fs");

/*
fs is the node filesystem module. We're importing it from the node standard library, which is always in scope (part of the standard node modules), so we don't provide a path at the beginning of the line.
*/

// fs.writeFile("./file.txt", 'hello world', err => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("done");
//   }
// });

// fs.readFile("./file.txt", "utf8", (err, data) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log(data);
//     }
//   });

const pojo = {
    animal: false,
    name: "peter obvarious jones otlewski",
    password: "shenanigan174",
    hobbies: ["reading", "writing", "snowboarding", "cat petting"]
  };

const pojoJson = JSON.stringify(pojo);

fs.writeFile("./file.txt", pojoJson, err => {
    if (err) {
      console.error(err);
    } else {
      console.log("done");
    }
  });

  