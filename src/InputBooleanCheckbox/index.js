import React from "react";
import Checkbox from "../Checkbox";

function InputBooleanCheckbox({className, field, object, id}) {
    function onChange(checked) {
        object[field] = checked;
    }

    const value = object[field];
    return (
        <Checkbox
            className={className}
            onChange={onChange}
            checked={value}
            label={field}
            id={id}
        />
    )
}

export default InputBooleanCheckbox;
