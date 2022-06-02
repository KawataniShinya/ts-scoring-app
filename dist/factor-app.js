"use strict";
class Score {
    constructor() { }
    get totalScore() {
        const factors = Factors.getInstance();
        return factors.activeElementsScore.reduce((total, score) => total + score, 0);
    }
    render() {
        document.querySelector('.score__number').textContent = String(this.totalScore);
    }
    static getInstance() {
        if (!Score.instance) {
            Score.instance = new Score();
        }
        return Score.instance;
    }
}
class Factor {
    constructor(element) {
        this.element = element;
        element.addEventListener('click', this.clickEventHandler.bind(this));
    }
    clickEventHandler() {
        this.element.classList.toggle('factor--active');
        const score = Score.getInstance();
        score.render();
    }
}
class Factors {
    constructor() {
        this.elements = document.querySelectorAll('.factor');
        this._activeElements = [];
        this._activeElementsScore = [];
        this.elements.forEach(element => {
            new Factor(element);
        });
    }
    get activeElements() {
        this._activeElements = [];
        this.elements.forEach(element => {
            if (element.classList.contains('factor--active')) {
                this._activeElements.push(element);
            }
        });
        return this._activeElements;
    }
    get activeElementsScore() {
        this._activeElementsScore = [];
        this.activeElements.forEach(element => {
            const factorScore = element.querySelector('.factor__score');
            if (factorScore) {
                this._activeElementsScore.push(Number(factorScore.textContent));
            }
        });
        return this._activeElementsScore;
    }
    static getInstance() {
        if (!Factors.instance) {
            Factors.instance = new Factors();
        }
        return Factors.instance;
    }
}
const factors = Factors.getInstance();
