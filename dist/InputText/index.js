function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import classNames from "../classNames";
import React from "react";
const defaultProps = {
  object: {},
  type: 'text'
};

function InputText({
  className,
  name,
  options,
  object,
  ...props
}) {
  const [value, setValue] = React.useState(object[name] || '');

  function onInput(e) {
    const value = e.target.value;
    setValue(value);
    object[name] = value;
  }

  const maxLength = props.maxLength;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("textarea", _extends({
    defaultValue: value,
    className: classNames('form-control', className),
    name: name,
    onInput: onInput
  }, props)), maxLength && /*#__PURE__*/React.createElement("span", {
    className: "form-text fs-xs"
  }, maxLength - value.length, " characters remaining"));
}

InputText.defaultProps = defaultProps;
export default InputText;