import React from 'react';
import { cx } from '../../utils/DomUtil';
const defaultProps = {};

function NavItem({
  className,
  children,
  ...props
}) {
  const classes = cx(className, 'nav-item bg-black-alpha-20');
  return /*#__PURE__*/React.createElement("li", {
    className: classes
  }, children);
}

NavItem.defaultProps = defaultProps;
export default NavItem;