const solvePart = require("./part1");

test("solvePart1 solves the problem correctly with testdata", () => {
  const result = solvePart("test1.txt");
  const expectedResult = 288;

  expect(result).toEqual(expectedResult);
});

test("solvePart1 solves the problem correctly", () => {
  const result = solvePart();
  const expectedResult = 2344708;

  expect(result).toEqual(expectedResult);
});
