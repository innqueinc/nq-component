function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import classNames from "../classNames";

function InputSelect({
  className,
  name,
  object,
  options = [],
  onChange,
  ...props
}) {
  function change(e) {
    const value = e.target.value;
    object[name] = value;
    onChange && onChange(value);
  }

  const value = object[name];
  return /*#__PURE__*/React.createElement("select", _extends({
    className: classNames('form-select fs-sm', className),
    onChange: change
  }, props, {
    defaultValue: value
  }), /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "Select ", name), options.map((o, i) => /*#__PURE__*/React.createElement("option", {
    key: i
  }, o)));
}

export default InputSelect;