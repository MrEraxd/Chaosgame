export default class Randomizer {
    #lastRandom: number;

    constructor() {
        this.#lastRandom = 0;
    }

    getRandomNumber(maxRange: number, notSameAsLast?: boolean): number{
        let random: number;

        do {
            random = Math.floor(Math.random() * maxRange);
        } while (notSameAsLast && this.#lastRandom === random)

        this.#lastRandom = random;

        return random;
    }
}