function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import classNames from "../classNames";
const defaultProps = {
  object: {},
  type: 'tel'
};

function InputNumber({
  className,
  name,
  options,
  object,
  ...props
}) {
  function onInput(e) {
    e.target.value = e.target.value.replace(/[^\d]/gi, '');

    if (e.target.value === '' || !e.target.validity.valid) {
      return;
    }

    object[name] = parseInt(e.target.value);
  }

  const value = object[name];
  return /*#__PURE__*/React.createElement("input", _extends({
    className: classNames('form-control', className),
    defaultValue: value,
    name: name,
    onInput: onInput
  }, props));
}

InputNumber.defaultProps = defaultProps;
export default InputNumber;