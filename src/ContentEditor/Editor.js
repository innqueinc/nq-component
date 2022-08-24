class Editor {
    constructor(editable) {
        this.editable = editable;
    }

    onDelete(e) {
        const element = this.editable.getSelected();
        if (this.isPlaceHolder(element)) {
            if (element.textContent.length === 0) {
                this.editable.cursorUp();
            }
            if (element.textContent.length <= 1) {
                e.preventDefault();
                element.textContent = "";
            }
        }
    }

    onEnter(e) {
        const element = this.editable.getSelected();
        if (this.isPlaceHolder(element) && element.nextSibling && this.isPlaceHolder(element.nextSibling)) {
            e.preventDefault();
            this.editable.cursorDown();
            return;
        }
        if (element.nodeName === 'P') {
            e.preventDefault();
            this.editable.execute('insertParagraph');
        }
    }

    onShiftEnter(e) {

    }

    isPlaceHolder(element) {
        return element.hasAttribute('data-placeholder');
    }

}

export default Editor;
