import React from "react";
import classNames from "../classNames";

const defaultProps = {
    object: {},
    type: 'date',
};

function InputDate({className, field, object, ...props}) {
    function onInput(e) {
        const value = e.target.value;
        object[field] = value;
    }

    return (
        <input
            defaultValue={object[field] && object[field].slice(0, 10)}
            className={classNames('form-control', className)}
            name={field}
            onInput={onInput}
            {...props}/>
    )
}

InputDate.defaultProps = defaultProps;

export default InputDate;
