class Pointer {
    constructor(view, canvas) {
        this.view = view;
        this.canvas = canvas;
        this.isPointerDown = false; // isDragging
        this.mouseX = -1;
        this.mouseY = -1;
        this.canvas.addEventListener("pointerdown", this.pointerDown.bind(this));
        document.addEventListener("pointermove", this.pointerMove.bind(this));
        document.addEventListener("pointerup", this.pointerUp.bind(this));
        document.addEventListener("onpointercancel", this.pointerUp.bind(this));
        document.addEventListener("onpointerout", this.pointerUp.bind(this));
        document.addEventListener("onpointerleave", this.pointerUp.bind(this));
    }

    pointerDown(e) {
        // register windows event
        e.preventDefault();//prevent drag other image
        this.isPointerDown = true;
        const {x, y} = this.getMouseCoordinates(e.clientX, e.clientY);
        this.mouseX = x;
        this.mouseY = y;
        this.view.onPointerDown(x, y);
    }

    pointerUp(e) {
        // unregister all windows event
        this.isPointerDown = false;
        const {x, y} = this.getMouseCoordinates(e.clientX, e.clientY);
        this.mouseX = x;
        this.mouseY = y;
        this.view.onPointerMove(x, y);
    }

    pointerMove(e) {
        e.preventDefault(); // stop scrolling on iOS Safari
        // var pageX = ev.pageX;
        // var pageY = ev.pageY;
        const {x, y} = this.getMouseCoordinates(e.clientX, e.clientY);
        this.mouseX = x;
        this.mouseY = y;
        this.view.onPointerMove(x, y);
    }

    getMouseCoordinates(x, y) {
        const bound = this.canvas.getBoundingClientRect();
        const boundW = bound.width;//size of the container
        const boundH = bound.height;
        //subtract offset of the canvas from current position on the screen
        //offset to screen
        const mouseX = x - bound.left;
        const mouseY = y - bound.top;
        //fit to any container size or screen
        //first normalize the mouse coordinates from 0 to 1
        const canvasW = this.canvas.width;//size of the drawing pixel
        const canvasH = this.canvas.height;
        const nX = mouseX / boundW;
        const nY = mouseY / boundH;
        //final result
        const fX = nX * canvasW;
        const fY = nY * canvasH
        return {x: fX, y: fY};
    }
}

export default Pointer;
