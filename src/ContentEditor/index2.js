import React from "react";
import classNames from "../classNames";

function noop() {
}

const defaultProps = {
    onReady: noop,
    onEnter: noop,
};


function ContentEditor({className, onSubmit, children, onReady, onEnter, ...props}) {
    const classes = classNames('outline-0', className);
    const ref = React.useRef();
    React.useEffect(() => {
        document.execCommand("defaultParagraphSeparator", false, "br");
        onReady(ref.current);
    }, [onReady])

    function getElement(node) {
        return node.nodeType === Node.TEXT_NODE ? node.parentNode : node;
    }

    function placeHolderPrevent(e) {
        // prevent delete placeholder
        const selection = window.getSelection();
        const node = selection.anchorNode;
        const element = node.nodeType === Node.TEXT_NODE ? node.parentNode : node;
        const isPlaceholder = element.hasAttribute('data-placeholder');
        if (element.textContent.length <= 1 && isPlaceholder) {
            e.preventDefault();
            element.textContent = "";
        }
        if (element.textContent.length === 0 && isPlaceholder && element.previousSibling) {
            const range = selection.getRangeAt(0);
            const offset = element.previousSibling.textContent.length ? 1 : 0;
            range.setStart(element.previousSibling, offset);
            range.setEnd(element.previousSibling, offset);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }

    function placeHolderNextSibling(e) {
        const selection = window.getSelection();
        const node = selection.anchorNode;
        const element = getElement(node);
        if (element.nextSibling && getElement(element.nextSibling).hasAttribute('data-placeholder')) {
            e.preventDefault();
            const range = selection.getRangeAt(0);
            const offset = element.nextSibling.textContent.length ? 1 : 0;
            range.setStart(element.nextSibling, offset);
            range.setEnd(element.nextSibling, offset);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }

    function insertParagraph(e) {
        const selection = window.getSelection();
        const node = selection.anchorNode;
        const element = getElement(node);
        if (element.nodeName === 'P' && !element.nextSibling) {
            e.preventDefault();
            const p = document.createElement('p');
            const temp = document.createElement("br"); // temporary replace when user type
            p.append(temp);
            const editor = ref.current;
            editor.append(p);
            const range = selection.getRangeAt(0);
            range.setStartAfter(p);
            range.setEndAfter(p);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }

    function insertBreak(e) {
        e.preventDefault();
        const selection = window.getSelection();
        const range = selection.getRangeAt(0);
        const br = document.createElement("br");
        const temp = document.createElement("br"); // temporary replace when user type
        range.deleteContents();//required or not?
        range.insertNode(br);
        range.collapse(false);// collapse range to end
        range.insertNode(temp);
        range.selectNodeContents(temp);// select
        // add range to selection
        range.setStartAfter(br);
        range.setEndAfter(temp);// section to end
        selection.removeAllRanges();
        selection.addRange(range);
    }

    function onKeyUp(e) {
    }

    function onKeyDown(e) {
        switch (e.keyCode) {
            case 8:// delete
                placeHolderPrevent(e);
                break;
            case 13:// enter
                if (e.shiftKey) { // shift enter
                    insertBreak(e);
                    break;
                }
                if (onEnter(e)) {
                    break;
                }
                insertParagraph(e);
                placeHolderNextSibling(e);
                break;
            default:
        }
    }

    return (
        <div
            suppressContentEditableWarning={true}
            contentEditable
            ref={ref}
            onKeyUp={onKeyUp.bind(this)}
            onKeyDown={onKeyDown}
            className={classes}
            {...props}>
            {children}
        </div>
    )
}

ContentEditor.defaultProps = defaultProps;

export default ContentEditor;
