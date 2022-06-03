import { Scoreable } from "./interfaces.js";
import { Factors } from "./factors.js";

export class Score implements Scoreable {
    private static instance: Score;
    private constructor() {}
    get totalScore() {
        const factors = Factors.getInstance();
        return factors.activeElementsScore.reduce((total, score) => total + score, 0)
    }
    render() {
        document.querySelector('.score__number')!.textContent = String(this.totalScore);
    }
    static getInstance() {
        if (!Score.instance) {
            Score.instance = new Score();
        }
        return Score.instance;
    }
}