import DateWeek from "./DateWeek";
import DateMonth from "./DateMonth";
import DateDay from "./DateDay";
import DateRange from "./DateRange";
import React from "react";

function DateType({field, type, onChange}) {
    React.useEffect(() => {
        return () => onChange({});
    }, []);
    switch (type) {
        case 'Daily':
            return <DateDay
                field={field}
                onChange={onChange}
            />
        case 'Weekly':
            return <DateWeek
                field={field}
                onChange={onChange}
            />
        case 'Monthly':
            return <DateMonth
                field={field}
                onChange={onChange}
            />
        case 'Custom':
            return <DateRange
                field={field}
                onChange={onChange}
            />
    }
}

export default DateType;
