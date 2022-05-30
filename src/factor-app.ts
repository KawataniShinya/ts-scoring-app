class Score { }

class Factor {
    constructor(public element: HTMLDivElement) {
        element.addEventListener('click', this.clickEventHandler.bind(this));
    }
    clickEventHandler() {
        this.element.classList.toggle('factor--active');
    }
}

class Factors {
    elements = document.querySelectorAll<HTMLDivElement>('.factor');
    constructor() {
        this.elements.forEach(element => {
            new Factor(element);
        })
    }
}
const factors = new Factors();