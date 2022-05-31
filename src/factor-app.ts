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
    get activeElements() {
        this._activeElements = [];
        this.elements.forEach(element => {
            if (element.classList.contains('factor--active')) {
                this._activeElements.push(element);
            }
        })
        return this._activeElements;
    }
    constructor() {
        this.elements.forEach(element => {
            new Factor(element);
        })
    }
}
const factors = new Factors();