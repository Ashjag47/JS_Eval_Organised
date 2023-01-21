// Funtion to get total score of Bowling game
const calculateTotalScore = (scoreCard) =>{
    // Invalid cases
    for (let score of scoreCard){
        if(isNaN(score)){
            return "Invalid input"
        }
    }
}

module.exports = calculateTotalScore;