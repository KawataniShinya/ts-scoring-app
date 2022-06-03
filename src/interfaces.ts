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