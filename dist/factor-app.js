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
        this.elements.forEach(element => {
            new Factor(element);
        });
    }
}
const factors = new Factors();
