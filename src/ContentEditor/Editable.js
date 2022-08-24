import Editor from "./Editor";

function getElement(node) {
    return node.nodeType === Node.TEXT_NODE ? node.parentNode : node;
}

class Editable {
    constructor(element) {
        this.element = element;
        this.editor = new Editor(this);
    }

    enable() {
        this.element.contentEditable = true;
        this.element.addEventListener('keydown', this);
        this.element.addEventListener('keyup', this);
        this.element.addEventListener('click', this);
        this.element.addEventListener('focus', this);
        this.element.addEventListener('paste', this);
        this.element.addEventListener('input', this);
        this.element.addEventListener('onselectstart', this);
        this.element.onselectstart = this.handleEvent.bind(this);
        document.onselectionchange = this.handleEvent.bind(this);
    }

    disable() {
        this.element.contentEditable = false;
        this.element.removeEventListener('keydown', this);
        this.element.removeEventListener('keyup', this);
        this.element.removeEventListener('click', this);
        this.element.removeEventListener('focus', this);
        this.element.removeEventListener('paste', this);
        this.element.removeEventListener('input', this);
        this.element.onselectstart = undefined;
        document.onselectionchange = undefined;
    }

    getSelected() {
        const selection = this.selection();
        const node = selection.anchorNode ? selection.anchorNode : this.element;
        return getElement(node);
    }

    handleEvent(e) {
        switch (e.type) {
            case 'keydown':
                this.onKeyDown(e);
                break;
            case 'keyup':
                break;
            case 'click':

                break;
            case 'focus':
                break;
            case 'paste':
                break;
            case 'input':
                break;
            default:
        }
    }

    onKeyDown(e) {
        switch (e.keyCode) {
            case 8:
                this.editor.onDelete(e);
                break;
            case 13:
                if (e.shiftKey) {
                    this.editor.onShiftEnter(e);
                    break;
                }
                this.editor.onEnter(e);
                break;
            default:
        }
    }


    range() {
        return document.createRange();
    }

    selection() {
        return window.getSelection();
    }

    undo() {

    }

    redo() {

    }

    execute(command, value) {
        switch (command) {
            case 'insertImage':
                const img = document.createElement('img');
                img.src = value;
                img.className = "img-fluid";
                this.insertAfter(img);
                break;
            case 'insertParagraph':
                const p = document.createElement('p');
                const temp = document.createElement("br");
                p.append(temp);
                this.insertAfter(p);
                this.cursorMove(p);
                break;
            default:
                document.execCommand(command, false, value);
        }
    }

    getElement() {
        return this.element;
    }

    cursorDown() {
        const element = this.getSelected();
        this.cursorMove(element.nextSibling);
    }

    cursorUp() {
        const element = this.getSelected();
        this.cursorMove(element.previousSibling);
    }

    cursorMove(node) {
        if (!node) return;
        const range = this.range();
        const offset = node.textContent.length ? 1 : 0;
        range.setStart(node, offset);
        range.setEnd(node, offset);
        const selection = this.selection();
        selection.removeAllRanges();
        selection.addRange(range);
    }

    insertAfter(node) {
        const selected = this.getSelected();
        selected.after(node);
    }

    insertBefore(node) {
        const selected = this.getSelected();
        selected.before(node);
    }
}

export default Editable;
