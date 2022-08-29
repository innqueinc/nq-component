import React from "react";
import Switch from "../Switch";

function InputBooleanSwitch({className, field, object, id}) {
    function onChange(checked) {
        object[field] = checked;
    }
    const value = object[field];
    return (
        <Switch
            className={className}
            onChange={onChange}
            checked={value}
            label={name}
            id={id}
        />
    )
}

export default InputBooleanSwitch;
