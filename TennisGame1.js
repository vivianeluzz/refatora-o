class TennisGame1 {
    constructor (playerName1, playerName2) {
        this.score1 = 0;
        this.scrore2 = 0
        this.playerName1 = playerName1;
        this.playerName2 = playerName2;
    }

wonPoint(playerName) {
    if (playerName === "player1"){
       this.score1 ++; 
    } else {
        this.score2 ++
    }
};

getTieScore(tieScore) {
    let tieScore = ["Love", "Fifteen", "Thirty", "Forty", "Deuce"];
    return this.score1 <= 3 && tieScore[this.score1] || tieScore[this.score === 3];
};

getWinScore(result) {
    if (result === 1){
        this.scrore = "Advantage player1";
        console.log("Result advantage player")
    } else {
       this.score = this.minusResult > 2 ? "Win for player1" : " ";
    }
};

getTemperatureScore() {
    if (this.score1 === this.score2) {
        this.temperatureScore -= this.score;
        return this.getTieScore();
    } else if (this.score1 >= 4 || this.score2 >= 4) {
        result = this.score = "Advantage player1";
        console.log(result)
    } else if (result === -1){
        return this.score = "Advantage player2"
    }
}
                  
}

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}