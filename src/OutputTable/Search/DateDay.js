import React, {useState} from "react";


function DateDay({field, onChange}) {
    const [value, setValue] = useState();

    function _onChange(startDate) {
        setValue(startDate.toISOString().slice(0, 10));
        startDate.setHours(0, 0, 0, 0);
        const endDate = new Date();
        endDate.setDate(startDate.getDate());
        endDate.setHours(23, 59, 59, 999);
        const where = {};
        where[field] = {$gte: startDate.toISOString(), $lte: endDate.toISOString()};
        onChange(where);
    }

    React.useEffect(() => {
        _onChange(new Date());
    }, []);

    return (
        <input
            className="form-control form-control-sm shadow-none w-auto rounded-0 rounded-end"
            value={value}
            onInput={e => _onChange(e.target.valueAsDate)}
            type="date"/>
    )
}

export default DateDay;
