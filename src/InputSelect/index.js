import React from "react";
import classNames from "../classNames";
import camelToTitleCase from "../camelToTitleCase";

function InputSelect({className, field, object, options = [], onChange, ...props}) {
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
            {...props}
            defaultValue={value || ""}>
            <option value="" disabled>
                Select {camelToTitleCase(field)}
            </option>
            {
                options.map((o, i) => <option key={i} value={o}>{o}</option>)
            }
        </select>
    )
}

export default InputSelect;
