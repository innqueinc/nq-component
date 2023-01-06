function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from "react";
import classNames from "../classNames";
const defaultProps = {};
function ModalHeader({
  className,
  children,
  toggle,
  ...rest
}) {
  const classes = classNames("modal-header bg-primary text-white", className);
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    className: classes
  }), /*#__PURE__*/React.createElement("h5", {
    className: "modal-title"
  }, children), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "btn btn-link close text-dark",
    onClick: toggle
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7")));
}
ModalHeader.defaultProps = defaultProps;
export default ModalHeader;