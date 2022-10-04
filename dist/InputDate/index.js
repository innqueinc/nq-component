function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import classNames from "../classNames";
const defaultProps = {
  object: {},
  type: 'date'
};

function InputDate({
  className,
  field,
  object,
  ...props
}) {
  function onInput(e) {
    const value = e.target.value;
    object[field] = value;
  }

  return /*#__PURE__*/React.createElement("input", _extends({
    defaultValue: object[field] && object[field].slice(0, 10),
    className: classNames('form-control', className),
    name: field,
    onInput: onInput
  }, props));
}

InputDate.defaultProps = defaultProps;
export default InputDate;