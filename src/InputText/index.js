import classNames from "../classNames";
import React from "react";

const defaultProps = {
    object: {},
    type: 'text',
};
function InputText({className, name, options, object, ...props}) {
    const [value, setValue] = React.useState(object[name] || '');
    function onInput(e) {
        const value = e.target.value;
        setValue(value);
        object[name] = value;
    }
    const maxLength = props.maxLength;
    return (
        <>
             <textarea
                 defaultValue={value}
                 className={classNames('form-control', className)}
                 name={name}
                 onInput={onInput}
                 {...props}/>
            {maxLength && <span className="form-text fs-xs">{maxLength - value.length} characters remaining</span>}
        </>

    )
}

InputText.defaultProps = defaultProps;

export default InputText;
