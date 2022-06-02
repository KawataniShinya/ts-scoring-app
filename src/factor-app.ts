interface Scoreable {
    readonly totalScore: Number;
    render(): void;
}

interface Factorable {
    element: HTMLDivElement;
    clickEventHandler(): void;
}

interface Factorsable {
    elements: NodeListOf<HTMLDivElement>;
    readonly activeElements: HTMLDivElement[];
    readonly activeElementsScore: number[];
}

class Score implements Scoreable {
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

class Factor implements Factorable {
    constructor(public element: HTMLDivElement) {
        element.addEventListener('click', this.clickEventHandler.bind(this));
    }
    clickEventHandler() {
        this.element.classList.toggle('factor--active');
        const score = Score.getInstance();
        score.render();
    }
}

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

const factors = Factors.getInstance();