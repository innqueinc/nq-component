import classNames from "../classNames";
import React from "react";

const defaultProps = {
    object: {},
    type: 'text',
};

function InputText({className, field, options, object, ...props}) {
    function onInput(e) {
        const value = e.target.value;
        object[field] = value;
    }
    const value = object[field];
    return (
        <>
             <textarea
                 defaultValue={value}
                 className={classNames('form-control', className)}
                 name={field}
                 onInput={onInput}
                 {...props}/>
        </>

    )
}

InputText.defaultProps = defaultProps;

export default InputText;
