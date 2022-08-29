import React from "react";
import classNames from "../classNames";

function InputSelect({className, field, object, options=[], onChange, ...props}) {
    function change(e) {
        const value = e.target.value;
        object[field] = value;
        onChange && onChange(value);
    }
    const value = object[field];
    return (
        <select
            className={classNames('form-select fs-sm', className)}
            onChange={change}
            {...props}
            defaultValue={value}>
            <option value="" disabled>
                Select {name}
            </option>
            {
                options.map((o, i) => <option key={i}>{o}</option>)
            }
        </select>
    )
}

export default InputSelect;
