import React from "react";

function TypeString({onChange, field}) {
    function _onChange(value) {
        const where = {};
        where[field] = {$regex: value, $options: 'i'};
        onChange(where);
    }



    return (
        <input
            type="text"
            onChange={e => _onChange(e.target.value)}
            className="form-control form-control-sm shadow-none w-auto rounded-0 rounded-end"
            placeholder="Search"/>
    )
}

export default TypeString;
