const fs = require("fs");


//read file and return an array that stores a register in each position.
const readFileAndTransformData = (filename, coding) => {
  const data = fs.readFileSync(filename, coding);
  let dataArr = data.split("\n");
  return dataArr;
};

module.exports = {
  readFileAndTransformData,
};
