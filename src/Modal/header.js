import React from "react";
import classNames from "../classNames";

const defaultProps = {
};

function ModalHeader({className, children, toggle, ...rest}) {
    const classes = classNames("modal-header bg-primary text-white", className);
    return (
        <div {...rest} className={classes}>
            <h5 className="modal-title">{children}</h5>
            <button type="button" className="btn btn-link close text-dark" onClick={toggle}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

ModalHeader.defaultProps = defaultProps;
export default ModalHeader;
