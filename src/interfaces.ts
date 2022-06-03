export interface Scoreable {
    readonly totalScore: Number;
    render(): void;
}

export interface Factorable {
    element: HTMLDivElement;
    clickEventHandler(): void;
}

export interface Factorsable {
    elements: NodeListOf<HTMLDivElement>;
    readonly activeElements: HTMLDivElement[];
    readonly activeElementsScore: number[];
}