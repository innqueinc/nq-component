function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import classNames from "../classNames";
function noop() {}
const defaultProps = {
  onChange: noop,
  id: 'check-default',
  type: 'checkbox'
};
const Checkbox = /*#__PURE__*/React.forwardRef(function Checkbox({
  className,
  id,
  onChange,
  label,
  type,
  ...props
}, ref) {
  const classes = classNames('form-check', className);
  return /*#__PURE__*/React.createElement("div", {
    className: classes
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    ref: ref,
    className: "form-check-input",
    onChange: e => onChange(e.target.checked),
    id: id
  }, props)), /*#__PURE__*/React.createElement("label", {
    className: "form-check-label",
    htmlFor: id
  }, label));
});
Checkbox.defaultProps = defaultProps;
export default Checkbox;