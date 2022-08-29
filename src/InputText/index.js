import classNames from "../classNames";
import React from "react";

const defaultProps = {
    object: {},
    type: 'text',
};
function InputText({className, field, options, object, ...props}) {
    const [value, setValue] = React.useState(object[field] || '');
    function onInput(e) {
        const value = e.target.value;
        setValue(value);
        object[field] = value;
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

InputText.defaultProps = defaultProps;

export default InputText;
