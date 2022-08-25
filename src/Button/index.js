import React from "react";
import classNames from "../classNames";
import Spinner from "../Spinner";

const defaultProps = {}

function Button({className, progress, children, disabled, ...props}) {
    const defaultStyle = {
        cursor: progress ? "wait" : ""
    };
    const attributes = {
        className: classNames(className, 'btn btn-primary'),
        style: {
            ...defaultStyle,
        },
        ...props
    };
    return (
        <button
            {...attributes}
            disabled={progress || disabled}>
            {progress && <Spinner className="me-2" size={"sm"}/>}
            {children}
        </button>
    )
}

Button.defaultProps = defaultProps;
export default Button;
