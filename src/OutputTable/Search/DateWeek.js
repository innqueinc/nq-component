import React from "react";

const options = [
    {label: 'This Week', value: 7},
    {label: 'Last Week', value: 14},
    {label: 'Last Two Week', value: 21},
    {label: 'Last Three Week', value: 28}
];

function DateWeek({field, onChange}) {
    function _onChange(value) {
        const where = {};
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - value);
        startDate.setHours(0, 0, 0, 0);
        const endDate = new Date();
        endDate.setDate(startDate.getDate() + 7);
        endDate.setHours(23, 59, 59, 999);
        where[field] = {$gte: startDate.toISOString(), $lte: endDate.toISOString()};
        onChange(where);
    }

    React.useEffect(() => {
        _onChange(options[0].value);
    }, []);

    return (
        <select
            onChange={e => _onChange(e.target.value)}
            className="form-select shadow-none fs-xs w-auto rounded-0">
            {
                options
                    .map((o) => {
                        return (
                            <option key={o.value} value={o.value}>{o.label}</option>
                        );
                    })
            }
        </select>
    )
}

export default DateWeek;
