import React from 'react';
import classNames from "../classNames";
const defaultProps = {};
function Accordion({
  className,
  children,
  eventKey,
  ...props
}) {
  const classes = classNames(className, 'accordion-toggle collapsed');
  return /*#__PURE__*/React.createElement("a", {
    className: classes,
    href: '#' + eventKey,
    "data-bs-toggle": "collapse",
    "aria-expanded": "true"
  }, children);
}
function Collapse({
  children,
  eventKey,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "collapse",
    id: eventKey
  }, children);
}
Accordion.Collapse = Collapse;
Accordion.defaultProps = defaultProps;
export default Accordion;