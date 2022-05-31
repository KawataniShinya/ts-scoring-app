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
    private _activeElements: HTMLDivElement[] = [];
    private _activeElementsScore: number[] = [];
    get activeElements() {
        this._activeElements = [];
        this.elements.forEach(element => {
            if (element.classList.contains('factor--active')) {
                this._activeElements.push(element);
            }
        })
        return this._activeElements;
    }
    get activeElementsScore() {
        this._activeElementsScore = [];
        this.activeElements.forEach(element => {
            const factorScore = element.querySelector('.factor__score');
            if (factorScore) {
                this._activeElementsScore.push(Number(factorScore.textContent))
            }
        })
        return this._activeElementsScore;
    }
    constructor() {
        this.elements.forEach(element => {
            new Factor(element);
        })
    }
}
const factors = new Factors();