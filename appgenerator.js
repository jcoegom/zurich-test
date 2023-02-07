const fs = require("fs");
function generateRandomChar() {
  const randomInt = Math.floor(Math.random() * 26);
  return String.fromCharCode(97 + randomInt);
}

function generateRandomString(length) {
  let randomString = "";
  for (let i = 0; i < length; i++) {
    randomString += generateRandomChar();
  }
  return randomString;
}

const NUM_SAMPLES = 100000;
const SAMPLE_SIZE = [4, 5, 5, 50, 40];

let data = [];
for (let i = 0; i < NUM_SAMPLES; i++) {
  data.push(generateRandomString(SAMPLE_SIZE[0]));
}
for (let i = 0; i < NUM_SAMPLES; i++) {
  data.push(generateRandomString(SAMPLE_SIZE[2]));
}
for (let i = 0; i < NUM_SAMPLES; i++) {
  data.push(generateRandomString(SAMPLE_SIZE[2]));
}
for (let i = 0; i < NUM_SAMPLES; i++) {
  data.push(generateRandomString(SAMPLE_SIZE[3]));
}
for (let i = 0; i < NUM_SAMPLES; i++) {
  data.push(generateRandomString(SAMPLE_SIZE[4]));
}
data = data.join("\n");

fs.writeFileSync("data.input", data);
