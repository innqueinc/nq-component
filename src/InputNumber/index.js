import React from 'react';
import classNames from "../classNames";

const defaultProps = {
    object: {},
    type: 'tel',
};

function InputNumber({className, field, options, object, ...props}) {
    function onInput(e) {
        e.target.value = e.target.value.replace(/[^\d]/gi, '');
        if (e.target.value === '' || !e.target.validity.valid) {
            return;
        }
        object[field] = parseInt(e.target.value);
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
