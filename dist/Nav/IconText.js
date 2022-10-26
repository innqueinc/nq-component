import React from 'react';
import { cx } from '../../utils/DomUtil';
const defaultProps = {
  className: 'row p-1'
};
function IconText({
  className,
  children,
  text,
  icon,
  ...props
}) {
  const classes = cx(className, defaultProps.className);
  return /*#__PURE__*/React.createElement("div", {
    className: classes
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-1"
  }, /*#__PURE__*/React.createElement("i", {
    className: icon
  })), /*#__PURE__*/React.createElement("div", {
    className: "pl-2 col"
  }, text));
}
IconText.defaultProps = defaultProps;
export default IconText;