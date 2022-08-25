import React from "react";
import Switch from "../Switch";

function InputBooleanSwitch({
  className,
  name,
  object,
  id
}) {
  function onChange(checked) {
    object[name] = checked;
  }

  const value = object[name];
  return /*#__PURE__*/React.createElement(Switch, {
    className: className,
    onChange: onChange,
    checked: value,
    label: name,
    id: id
  });
}

export default InputBooleanSwitch;