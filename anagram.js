const {
  readFileAndTransformData,
} = require("./Developer-test/utils/utilsFile");

const {
  calculateAnagramsStd,
  calculateAnagramsImp,
  calculateAnagramsCountHash,
  calculateAnagramsMix,
} = require("./Developer-test/utils/algorithms");

const {
  executeFunction,
  UnitsTimeExecution,
} = require("./Developer-test/utils/common");


//start main program. Get filename from console.
const parameterValue = process?.argv[2]
  ? process?.argv[2]
  : "./developer-test/data/example1.txt";

let data = readFileAndTransformData(parameterValue, "utf-8");


//Execute algoritms.
let result = executeFunction(calculateAnagramsStd, {
  description: "ALG-STD",
  enableExecution: true,
  enableLog: false,
  enableNumResults: false,
  enableTimeExecution: false,
  showOutputAsString: true,
  unitTimeExecution: UnitsTimeExecution.MILLIS,
})(data);

result = executeFunction(calculateAnagramsImp, {
  description: "ALG-PRIME",
  enableExecution: false,
  enableLog: false,
  enableNumResults: true,
  enableTimeExecution: true,
  showOutputAsString: false,
  unitTimeExecution: UnitsTimeExecution.MILLIS,
})(data);

result = executeFunction(calculateAnagramsCountHash, {
  description: "ALG-COUNT-HASH",
  enableExecution: false,
  enableLog: false,
  enableNumResults: true,
  enableTimeExecution: true,
  showOutputAsString: false,
  unitTimeExecution: UnitsTimeExecution.MILLIS,
})(data);

result = executeFunction(calculateAnagramsMix, {
  description: "ALG-MIX",
  enableExecution: false,
  enableLog: false,
  enableNumResults: true,
  enableTimeExecution: true,
  showOutputAsString: false,
  unitTimeExecution: UnitsTimeExecution.MILLIS,
})(data);
