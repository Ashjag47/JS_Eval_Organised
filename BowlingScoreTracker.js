// sum
const sum = (array) => {
  let sum = 0;
  array.forEach(element => {
    sum += element;
  });
  return sum;
};

// Funtion to get total score of Bowling game
const calculateTotalScore = (scoreCard) => {
  // Invalid cases
  for (const score of scoreCard) {
    if (isNaN(score) || score > 10) {
      return "Invalid input";
    }
  }
  if (scoreCard.length > 21) {
    return "Invalid input";
  }
  // create frames
  let i = 0;
  const frameScoreCard = [];
  while (i < scoreCard.length) {
    if (scoreCard[i] == 10) {
      frameScoreCard.push([scoreCard[i]]);
      i += 1;
    } else {
      if (i == scoreCard.length - 1) {
        frameScoreCard.push([scoreCard[i]]);
        i += 1;
      } else if (scoreCard[i] + scoreCard[i + 1] > 10) {
        return "Invalid input";
      } else {
        frameScoreCard.push([scoreCard[i], scoreCard[i + 1]]);
        i += 2;
      }
    }
  }
  // Invalid case - frameScoreCard should have only 10 or less frames
  if (frameScoreCard.length > 10) {
    if (sum(frameScoreCard[9]) == 10 && frameScoreCard[9].length == 2 && frameScoreCard.length == 11) { console.log("hi"); } else if (sum(frameScoreCard[9]) == 10 && frameScoreCard[9].length == 1) {
      if (sum(frameScoreCard[10]) <= 10 && frameScoreCard[10].length == 1 && frameScoreCard.length <= 12) {} else if (sum(frameScoreCard[10]) <= 10 && frameScoreCard[10].length == 2 && frameScoreCard.length == 11) {} else {
        return "Invalid input";
      }
    } else {
      return "Invalid input";
    }
  }
};

module.exports = calculateTotalScore;
