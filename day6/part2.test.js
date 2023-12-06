const solvePart = require("./part2");

test("solvePart2 solves the problem correctly with testdata", () => {
  const result = solvePart("test1.txt");
  const expectedResult = 71503;

  expect(result).toEqual(expectedResult);
});

/*test("solvePart2 solves the problem correctly", () => {
  const result = solvePart();
  const expectedResult = 0;

  expect(result).toEqual(expectedResult);
});*/
