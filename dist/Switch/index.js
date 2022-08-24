function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import classNames from "../classNames";

function noop() {}

const defaultProps = {
  onChange: noop,
  id: 'check-default'
};
const Switch = /*#__PURE__*/React.forwardRef(function Switch({
  className,
  id,
  onChange,
  checked,
  label,
  ...props
}, ref) {
  const classes = classNames('form-check form-switch', className);
  return /*#__PURE__*/React.createElement("div", {
    className: classes
  }, /*#__PURE__*/React.createElement("input", _extends({
    className: "form-check-input",
    type: "checkbox",
    role: "switch",
    ref: ref,
    checked: checked,
    onChange: e => onChange(e.target.checked),
    id: id
  }, props)), /*#__PURE__*/React.createElement("label", {
    className: "form-check-label",
    htmlFor: id
  }, label));
});
Switch.defaultProps = defaultProps;
export default Switch;