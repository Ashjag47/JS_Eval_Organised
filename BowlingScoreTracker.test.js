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

test.each(invalidCases)("%p is %s", (input, output) => {
  expect(calculateTotalScore(input)).toBe(output);
});
