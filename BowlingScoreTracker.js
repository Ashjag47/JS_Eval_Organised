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

  /* -------------------------------------------------------------------------------------------------- */

  // calculate total for valid cases
  i = 0;
  frame = 1;
  let totalScore = 0;
  while (frame <= frameScoreCard.length) {
    if (frame < 10) {
      // Strike when frame is NOT 10
      if (scoreCard[i] == 10) {
        totalScore += scoreCard[i] + scoreCard[i + 1] + scoreCard[i + 2];
        i += 1;
        frame += 1;
      }
      // Spare when frame is NOT 10
      else if (scoreCard[i] + scoreCard[i + 1] == 10) {
        totalScore += scoreCard[i] + scoreCard[i + 1] + scoreCard[i + 2];
        i += 2;
        frame += 1;
      }
      // Open when frame is NOT 10
      else {
        totalScore += scoreCard[i] + scoreCard[i + 1];
        i += 2;
        frame += 1;
      }
    } else {
      // Strike when frame is 10
      if (scoreCard[i] == 10) {
        totalScore += sum(scoreCard.slice(i));
      }
      // Spare when frame is 10
      else if (scoreCard[i] + scoreCard[i + 1] == 10) {
        totalScore += sum(scoreCard.slice(i));
      }
      // Open when frame is 10
      else {
        totalScore += sum(scoreCard.slice(i));
      }
      frame = frameScoreCard.length + 1;
    }
  }
  return totalScore;
};

module.exports = calculateTotalScore;
