import React from 'react';
import classNames from "../classNames";

const defaultProps = {
    object: {},
    type: 'tel',
    parse: true
};

function InputNumber({type, parse, className, maxLength, field, options, object, ...props}) {
    function onInput(e) {
        const value = e.target.value.replace(/[^\d]/gi, '');
        e.target.setCustomValidity('');
        e.target.value = value
        if (maxLength && parseInt(maxLength) < value.length) {
            e.target.value = value.slice(0, parseInt(maxLength));
            return;
        }
        object[field] = parse ? parseInt(value) : value;
    }

    const value = object[field];
    return (
        <input
            className={classNames('form-control', className)}
            defaultValue={value}
            name={field}
            onInput={onInput}
            {...props}/>
    )
}

InputNumber.defaultProps = defaultProps;

export default InputNumber;
