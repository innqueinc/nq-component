import DateWeek from "./DateWeek";
import DateMonth from "./DateMonth";
import DateDay from "./DateDay";
import DateRange from "./DateRange";
import React from "react";
function DateType({
  field,
  type,
  onChange
}) {
  React.useEffect(() => {
    return () => onChange({});
  }, []);
  switch (type) {
    case 'Daily':
      return /*#__PURE__*/React.createElement(DateDay, {
        field: field,
        onChange: onChange
      });
    case 'Weekly':
      return /*#__PURE__*/React.createElement(DateWeek, {
        field: field,
        onChange: onChange
      });
    case 'Monthly':
      return /*#__PURE__*/React.createElement(DateMonth, {
        field: field,
        onChange: onChange
      });
    case 'Custom':
      return /*#__PURE__*/React.createElement(DateRange, {
        field: field,
        onChange: onChange
      });
  }
}
export default DateType;