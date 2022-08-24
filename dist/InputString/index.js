function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import classNames from "../classNames";
const defaultProps = {
  object: {},
  type: 'text'
};

function InputString({
  className,
  name,
  options,
  object,
  ...props
}) {
  function onInput(e) {
    const value = e.target.value;
    object[name] = value;
  }

  const value = object[name];
  return /*#__PURE__*/React.createElement("input", _extends({
    defaultValue: value,
    className: classNames('form-control', className),
    name: name,
    placeholder: name,
    onInput: onInput
  }, props));
}

InputString.defaultProps = defaultProps;
export default InputString;