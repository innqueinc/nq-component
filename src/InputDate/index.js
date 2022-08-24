import React from "react";
import classNames from "../classNames";

const defaultProps = {
    object: {},
    type: 'date',
};

function InputDate({className, name, object, ...props}) {
    function onInput(e) {
        const value = e.target.value;
        object[name] = value;
    }

    return (
        <input
            value={object[name] && object[name].slice(0, 10)}
            className={classNames('form-control', className)}
            name={name}
            onInput={onInput}
            {...props}/>
    )
}

InputDate.defaultProps = defaultProps;

export default InputDate;
