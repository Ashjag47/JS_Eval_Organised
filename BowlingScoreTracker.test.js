const calculateTotalScore = require('./BowlingScoreTracker');

const invalidCases = [
    [["a",2,3],"Invalid input"],
    [["a",'.',3],"Invalid input"]
]

test.each(invalidCases)('%p is %s', (input,output) =>{
    expect(calculateTotalScore(input)).toBe(output);
});