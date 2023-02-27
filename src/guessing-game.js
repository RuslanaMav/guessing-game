class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.guess1 = Math.round((this.max + this.min) / 2);
        return this.guess1;
    }

    lower() {
        this.max = this.guess1;
    }

    greater() {
        this.min = this.guess1;
    }
}

module.exports = GuessingGame;
