const calculateTotalScore = require("./BowlingScoreTracker");

const invalidCases = [
  [["a", 2, 3], "Invalid input"],
  [["a", ".", 3], "Invalid input"],
  [[3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 5], "Invalid input"],
  [[3, 6, 3, 7, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3], "Invalid input"],
  [[3, 6, 3, 7, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 7, 3, 9], "Invalid input"],
  [[3, 6, 3, 7, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 7, 10, 1], "Invalid input"],
  [[3, 6, 3, 7, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 10, 3, 7, 7], "Invalid input"],
  [[3, 6, 3, 7, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 10, 10, 9, 1], "Invalid input"]
];

const validCases = [
  [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10], 30],
  [[3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6], 90],
  [[6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 16],
  [[10, 9, 1, 10, 4, 5, 3, 6, 4, 4, 1, 3, 10, 1, 9, 5, 5, 2], 136],
  [[10, 10, 10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 81],
  [[10, 5, 5, 9, 0], 48],
  [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 10], 20]
];

test.each(invalidCases)("%p is %s", (input, output) => {
  expect(calculateTotalScore(input)).toBe(output);
});
test.each(validCases)("%p is %s", (input, output) => {
  expect(calculateTotalScore(input)).toBe(output);
});
