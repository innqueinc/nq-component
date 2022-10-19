import React from "react";
import classNames from "../classNames";
import camelToTitleCase from "../camelToTitleCase";
const defaultProps = {
    field: '',
    selected:-1
}

function InputSelect({className, field, object, options = [], onChange, label, selected, ...props}) {
    function change(e) {
        const value = e.target.value;
        object[field] = value;
        onChange && onChange(value);
    }

    const value = object[field];

    return (
        <select
            className={classNames('form-select', className)}
            onChange={change}
            defaultValue={value || ""}
            {...props}>
            <option value="" disabled>
                {label || `Select ${camelToTitleCase(field)}`}
            </option>
            {
                options.map((o, i) => <option key={i} value={o} selected={value === o || selected === i}>{o}</option>)
            }
        </select>
    )
}

InputSelect.defaultProps = defaultProps;

export default InputSelect;
