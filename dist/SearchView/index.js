function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from "react";
import classNames from "../classNames";
const defaultProps = {
  object: {},
  type: 'password'
};
function SearchView({
  className,
  field,
  object,
  hidden,
  ...props
}) {
  const classes = classNames('form-control border-end-0 pe-0', className);
  const ref = React.useRef();
  function onInput(e) {
    const value = e.target.value;
    object[field] = value;
  }
  function showPasswordClick(e) {
    const isText = ref.current.type === 'text';
    ref.current.type = isText ? 'password' : 'text';
    if (isText) {
      e.target.classList.add("bi-eye-slash");
      e.target.classList.remove("bi-eye");
    } else {
      e.target.classList.remove("bi-eye-slash");
      e.target.classList.add("bi-eye");
    }
  }
  const value = object[field];
  return /*#__PURE__*/React.createElement("div", {
    className: "input-group"
  }, /*#__PURE__*/React.createElement("input", _extends({
    autoComplete: "new-password",
    ref: ref,
    defaultValue: value,
    className: classes,
    name: field,
    onInput: onInput
  }, props)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-link text-muted shadow-none bi bi-search",
    onClick: showPasswordClick
  }));
}
SearchView.defaultProps = defaultProps;
export default SearchView;