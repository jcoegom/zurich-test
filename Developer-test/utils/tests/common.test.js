const { executeFunction, UnitsTimeExecution } = require("../common");

const assert = require("assert");

describe("executeFunction", function () {
  it('should log "Execution disabled" when execution is disabled', function () {
    let log = "";
    const consoleLog = console.log;
    console.log = (...args) => {
      log += args.join(" ") + "\n";
    };

    const testFn = () => "test result";
    const result = executeFunction(testFn, {
      description: "Function",
      enableExecution: false,
    })();

    console.log = consoleLog;

    assert.strictEqual(result, "Execution disabled");
    assert.strictEqual(log, "Function not executed (disabled)\n");
  });

  it("should log the result, number of results when execution is enabled", function () {
    let log = "";
    const consoleLog = console.log;
    console.log = (...args) => {
      log += args.join(" ") + "\n";
    };

    const testFn = () => [["test result 1"], ["test result 2"]];
    const result = executeFunction(testFn, {
      enableExecution: true,
      enableTimeExecution: false,
      enableLog: true,
      enableNumResults: true,
      description: "test description",
    })();

    console.log = consoleLog;

    assert.deepStrictEqual(result, [["test result 1"], ["test result 2"]]);

    assert.ok(log.includes("Num. Results (test description): 2\n"));
  });

  it("should return the result of a function", function () {
    const testFn = (a, b) => a + b;
    const result = executeFunction(testFn, {
      description: "Test function",
      enableExecution: true,
      enableLog: false,
      unitsTimeExecution: UnitsTimeExecution.MILLIS,
    })(1, 2);
    assert.equal(result, 3);
  });

  it('should return "Execution disabled" if enableExecution is false', function () {
    const testFn = (a, b) => a + b;
    const result = executeFunction(testFn, {
      description: "Test function",
      enableExecution: false,
      enableLog: false,
    })(1, 2);
    assert.equal(result, "Execution disabled");
  });
});
