import React from "react";
import classNames from "../classNames";
import Editable from "./Editable";

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
        const editable = new Editable(ref.current);
        editable.enable();
        onReady(editable);
        return () => {
            editable.disable();
        }
    }, [onReady]);

    return (
        <div
            suppressContentEditableWarning={true}
            ref={ref}
            className={classes}
            {...props}>
            {children}
        </div>
    )
}

ContentEditor.defaultProps = defaultProps;

export default ContentEditor;
