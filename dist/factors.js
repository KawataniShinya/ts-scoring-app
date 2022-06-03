"use strict";
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
