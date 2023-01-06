function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from "react";
import classNames from "../classNames";
function Breadcrumb({
  children,
  className
}) {
  const classes = classNames("breadcrumb", className);
  return /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("ol", {
    className: classes
  }, children));
}
function Item({
  children,
  className,
  ...props
}) {
  const classes = classNames("breadcrumb-item", className);
  return /*#__PURE__*/React.createElement("li", _extends({
    className: classes
  }, props), children);
}
Breadcrumb.Item = Item;
export default Breadcrumb;