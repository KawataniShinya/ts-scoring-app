import { Score } from "./score.js";
export class Factor {
    constructor(element) {
        this.element = element;
        element.addEventListener('click', this.clickEventHandler.bind(this));
    }
    clickEventHandler() {
        this.element.classList.toggle('factor--active');
        const score = Score.getInstance();
        score.render();
    }
}
