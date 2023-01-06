import LRUCache from './LRUCache';

function noop() {
}


class PointerHandler {
    constructor(element, listener = noop) {
        this.element = element;
        this.listener = listener;
        this.cache = new LRUCache(10);
        this.element.addEventListener("pointerdown", this);
        this.element.addEventListener("touchmove", this.touchmove);
    }

    touchmove(e) {
        // fix auto cancel and prevent disabling onclick
        e.preventDefault();
    }

    handleEvent(e) {
        const event = {id: e.pointerId, type: e.type, x: e.clientX, y: e.clientY, isPrimary: e.isPrimary};
        this.cache.put(e.pointerId, event);
        switch (e.type) {
            case 'pointerdown':
                e.isPrimary && this.registerEvent();
                this.listener(e.type);
                break;
            case 'pointermove':
                this.listener(e.type);
                break;
            case 'pointerup':
                this.listener(e.type);
                this.cache.delete(e.pointerId);
                // remove event listener if all pointer is up
                this.cache.size() === 0 && this.removeEvent();
                break;
            case 'onpointercancel':
            case 'onpointerout':
            case 'onpointerleave':
                this.removeEvent();
                this.cache.clear();
                break;
            default:
        }
    }

    getEvents() {
        return this.cache.values();
    }

    registerEvent() {
        this.element.addEventListener("pointermove", this);
        this.element.addEventListener("pointerup", this);
        this.element.addEventListener("onpointercancel", this);
        this.element.addEventListener("onpointerout", this);
        this.element.addEventListener("onpointerleave", this);
    }

    removeEvent() {
        this.element.removeEventListener("pointermove", this);
        this.element.removeEventListener("pointerup", this);
        this.element.removeEventListener("onpointercancel", this);
        this.element.removeEventListener("onpointerout", this);
        this.element.removeEventListener("onpointerleave", this);
    }

    getMouseCoordinates(x, y) {
        // minus offset
        const bound = this.element.getBoundingClientRect();

        const offsetX = x - bound.left;
        const offsetY = y - bound.top;
        // real size of the element to the screen stretch or compress
        const clientWidth = this.element.clientWidth;
        const clientHeight = this.element.clientHeight;

        // original size of the element in canvas this is the view port
        const width = this.element.width ? this.element.width : clientWidth;
        const height = this.element.height ? this.element.height : clientHeight;
        // normalize the mouse coordinates from 0 to 1 to get percentage
        const nX = offsetX / clientWidth;
        const nY = offsetY / clientHeight;
        // multiply to the view port size to convert percentage to real position
        const fX = nX * width;
        const fY = nY * height;
        return {x: fX, y: fY};
    }

}

export default PointerHandler;
