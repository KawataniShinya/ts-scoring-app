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