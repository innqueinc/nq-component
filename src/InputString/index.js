import React from 'react';
import classNames from "../classNames";

const defaultProps = {
    object: {},
    type: 'text',
};

function InputString({className, name, options, object, ...props}) {
    function onInput(e) {
        const value = e.target.value;
        object[name] = value;
    }

    const value = object[name];
    return (
        <input
            defaultValue={value}
            className={classNames('form-control', className)}
            name={name}
            placeholder={name}
            onInput={onInput}
            {...props}
        />
    )
}

InputString.defaultProps = defaultProps;
export default InputString;
