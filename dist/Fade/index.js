import React from "react";
import { Transition } from 'react-transition-group';
import classNames from "../classNames";
const defaultProps = {
  as: "div",
  baseClass: "fade",
  timeout: 150,
  appear: true,
  baseClassActive: "show"
};
const Fade = /*#__PURE__*/React.forwardRef(({
  as: Comp,
  className,
  baseClass,
  baseClassActive,
  children,
  style,
  ...rest
}, ref) => {
  return /*#__PURE__*/React.createElement(Transition, rest, status => {
    const isActive = status === "entered";
    const classes = classNames(className, baseClass, isActive && baseClassActive);
    return /*#__PURE__*/React.createElement(Comp, {
      className: classes,
      ref: ref,
      style: style
    }, children);
  });
});
Fade.defaultProps = defaultProps;
export default Fade;