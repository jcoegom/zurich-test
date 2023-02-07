//Cont variables to define how to return execution time.
const UnitsTimeExecution = {
  MILLIS: 1,
  SECONDS: 1000,
};


//Wrapper for algorithms that allow us to display the useful data.
const executeFunction =
  (
    fn,
    {
      description = "",
      enableExecution = false,
      enableLog = true,
      enableTimeExecution = true,
      enableNumResults = true,
      showOutputAsString = false,
      unitTimeExecution = UnitsTimeExecution.MILLIS,
    }
  ) =>
  (...args) => {
    if (!enableExecution) {
      console.log(`${description} not executed (disabled)`);
      return "Execution disabled";
    }
    const startTime = new Date();
    let result = null;
    try {
      result = fn(...args);
    } catch (err) {
      console.log(`Error in ${description}:${err}`);
      return;
    }
    const endTime = new Date();
    if (enableLog) console.log(`Results (${description}): ${result}`);
    if (enableNumResults)
      console.log(`Num. Results (${description}): ${result.length}`);
    if (enableTimeExecution)
      console.log(
        `Execution Time (${description})`,
        (endTime - startTime) / unitTimeExecution
      );

    if (showOutputAsString) {
      for (let resultItem of result) {
        console.log(resultItem.join(","));
      }
    }

    return result;
  };

module.exports = {
  executeFunction,
  UnitsTimeExecution,
};
