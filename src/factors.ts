class Factors implements Factorsable {
    private static instance: Factors;
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
    private constructor() {
        this.elements.forEach(element => {
            new Factor(element);
        })
    }
    static getInstance() {
        if (!Factors.instance) {
            Factors.instance = new Factors();
        }
        return Factors.instance;
    }
}