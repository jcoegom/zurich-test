const fs = require("fs");
const assert = require("assert");

const { readFileAndTransformData } = require("../utilsFile");

describe("readFileAndTransformData", function () {
  it("should return an array of strings", function () {
    const data = "line1\nline2\nline3";
    fs.writeFileSync("test.txt", data);
    const result = readFileAndTransformData("test.txt", "utf-8");
    assert.deepEqual(result, ["line1", "line2", "line3"]);
  });

  it("should handle an empty file", function () {
    fs.writeFileSync("empty.txt", "");
    const result = readFileAndTransformData("empty.txt", "utf-8");
    assert.deepEqual(result, [""]);
  });

  it("should throw an error if file not found", function () {
    assert.throws(() => {
      readFileAndTransformData("non-existent.txt", "utf-8");
    }, /ENOENT/);
  });
});
