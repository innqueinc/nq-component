import React from 'react';
import classNames from "../classNames";

const defaultProps = {
    object: {},
    type: 'text',
};

function InputString({className, field, options, object, ...props}) {
    function onInput(e) {
        const value = e.target.value;
        e.target.setCustomValidity('');
        object[field] = value;
    }

    const value = object[field];
    return (
        <input
            defaultValue={value}
            className={classNames('form-control', className)}
            name={field}
            placeholder={name}
            onInput={onInput}
            {...props}
        />
    )
}

InputString.defaultProps = defaultProps;
export default InputString;
