import React, {useState} from "react";


function DateMonth({field, onChange}) {
    const [value, setValue] = useState();

    function _onChange(startDate) {
        const where = {};
        startDate.setHours(0, 0, 0, 0);
        const endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0);
        endDate.setHours(23, 59, 59, 999);
        where[field] = {$gte: startDate.toISOString(), $lte: endDate.toISOString()};
        onChange(where);
        setValue(endDate.toISOString().slice(0, 7));
    }

    React.useEffect(() => {
        const now = new Date();
        const date = new Date(now.getFullYear(), now.getMonth(), 1);
        _onChange(date);
    }, []);

    return (
        <input
            className="form-control form-control-sm shadow-none w-auto rounded-0 rounded-end"
            value={value}
            onInput={e => _onChange(e.target.valueAsDate)}
            type="month"/>
    )
}

export default DateMonth;
