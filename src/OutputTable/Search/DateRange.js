import React, {useState} from "react";


function DateRange({field, onChange}) {
    const [start, setStart] = useState();
    const [end, setEnd] = useState();

    function _onChange(startDate, endDate) {
        startDate.setHours(0, 0, 0, 0);
        endDate.setHours(23, 59, 59, 999);
        const where = {};
        where[field] = {$gte: startDate.toISOString(), $lte: endDate.toISOString()};
        onChange(where);
    }

    function _onChangeStart(date) {
        setStart(date.toISOString().slice(0, 10));
        _onChange(date, new Date(end));
    }

    function _onChangeEnd(date) {
        setEnd(date.toISOString().slice(0, 10));
        _onChange(new Date(start), date);
    }

    React.useEffect(() => {
        const date = new Date();
        setStart(date.toISOString().slice(0, 10));
        setEnd(date.toISOString().slice(0, 10));

    }, []);

    return (
        <>
            <input
                className="form-control form-control-sm shadow-none w-auto rounded-0"
                value={start}
                onInput={e => _onChangeStart(e.target.valueAsDate)}
                type="date"/>
            <input
                className="form-control form-control-sm shadow-none w-auto rounded-0 rounded-end"
                value={end}
                onInput={e => _onChangeEnd(e.target.valueAsDate)}
                type="date"/>
        </>

    )
}

export default DateRange;
