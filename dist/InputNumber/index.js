function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import classNames from "../classNames";
const defaultProps = {
  object: {},
  type: 'tel',
  parse: true
};
function InputNumber({
  type,
  parse,
  className,
  maxLength,
  field,
  options,
  object,
  ...props
}) {
  function onInput(e) {
    const value = e.target.value.replace(/[^\d]/gi, '');
    e.target.setCustomValidity('');
    e.target.value = value;
    if (maxLength && parseInt(maxLength) < value.length) {
      e.target.value = value.slice(0, parseInt(maxLength));
      return;
    }
    object[field] = parse ? parseInt(value) : value;
  }
  const value = object[field];
  return /*#__PURE__*/React.createElement("input", _extends({
    className: classNames('form-control', className),
    defaultValue: value,
    name: field,
    onInput: onInput
  }, props));
}
InputNumber.defaultProps = defaultProps;
export default InputNumber;