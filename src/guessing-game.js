class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
    }

    guess() {
        this.candidate = Math.round((this.minValue + this.maxValue) / 2);
        return this.candidate
    }

    lower() {
        this.maxValue = this.candidate;
    }

    greater() {
        this.minValue = this.candidate;
    }
}

module.exports = GuessingGame;
