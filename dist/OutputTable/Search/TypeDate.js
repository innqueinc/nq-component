import React from "react";
import DateType from "./DateType";
const keys = ['Daily', 'Weekly', 'Monthly', 'Custom'];

function TypeDate({
  field,
  onChange
}) {
  const [key, setKey] = React.useState(keys[0]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("select", {
    onChange: e => setKey(e.target.value),
    className: "form-select shadow-none fs-xs w-auto rounded-0"
  }, keys.map(key => {
    return /*#__PURE__*/React.createElement("option", {
      key: key,
      value: key
    }, key);
  })), /*#__PURE__*/React.createElement(DateType, {
    field: field,
    type: key,
    onChange: onChange
  }));
}

export default TypeDate;