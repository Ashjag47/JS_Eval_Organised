// Function to handel the strike
const strike = (currentFrame,next,later) =>{
    return currentFrame+next+later
}

// Function to handel the spare
const spare = (currentFrame,next) =>{
    return currentFrame+next
}

// Function to handel the open frame
const open = (currentFrame) =>{
    return currentFrame
}

// Function to check the frame has STRIKE or SPARE or OPEN
const totalScoreTracker = (scoreCard) =>{
    const totalThrows = scoreCard.length
    let totalScore = 0
    let i = 0
    let frame = 1
    // throws cant be more than 21
    // but can be less than 12 because a person can quit
    if(totalThrows>21){
        return -1
    }
    // For valid inputs
    while(frame<10 && i<totalThrows){
        if(scoreCard[i]===10){
            totalScore += strike(scoreCard[i],scoreCard[i+1],scoreCard[i+2])
            frame+=1
            i+=1
        }
        else if(scoreCard[i]+scoreCard[i+1]===10){
            totalScore+=spare(scoreCard[i]+scoreCard[i+1],scoreCard[i+2])
            frame+=1
            i+=2
        }
        else{
            totalScore+=open(scoreCard[i],scoreCard[i+1])
            frames+=1
            i+=2
        }
    }
    return totalScore
}