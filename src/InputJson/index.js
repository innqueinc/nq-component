import classNames from "../classNames";
import React from "react";

const defaultProps = {
    object: {},
    type: 'text',
};

function InputJson({className, field, object, options, ...props}) {
    const [value, setValue] = React.useState(JSON.stringify(object[field], null, 4) || '');

    function onInput(e) {
        const value = e.target.value;
        setValue(value);
        try {
            Object.assign(object[field], JSON.parse(value));
        } catch (error) {
            // ignore error
        }
    }

    const maxLength = props.maxLength;
    return (
        <>
             <textarea
                 defaultValue={value}
                 className={classNames('form-control', className)}
                 name={field}
                 onInput={onInput}
                 {...props}/>
            {maxLength && <span className="form-text fs-xs">{maxLength - value.length} characters remaining</span>}
        </>

    )
}

InputJson.defaultProps = defaultProps;

export default InputJson;
