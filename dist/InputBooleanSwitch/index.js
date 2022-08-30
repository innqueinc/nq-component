import React from "react";
import Switch from "../Switch";

function InputBooleanSwitch({
  className,
  field,
  object,
  id
}) {
  function onChange(checked) {
    object[field] = checked;
  }

  const value = object[field];
  return /*#__PURE__*/React.createElement(Switch, {
    className: className,
    onChange: onChange,
    checked: value,
    label: field,
    id: id
  });
}

export default InputBooleanSwitch;