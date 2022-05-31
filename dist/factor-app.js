"use strict";
class Score {
}
class Factor {
    constructor(element) {
        this.element = element;
        element.addEventListener('click', this.clickEventHandler.bind(this));
    }
    clickEventHandler() {
        this.element.classList.toggle('factor--active');
    }
}
class Factors {
    constructor() {
        this.elements = document.querySelectorAll('.factor');
        this._activeElements = [];
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
}
const factors = new Factors();
