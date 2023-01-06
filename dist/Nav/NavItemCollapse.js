import React from 'react';
import { NavLink } from 'react-router-dom';
import NavItem from './NavItem';
import IconText from './IconText';
function NavItemCollapse({
  children,
  id,
  ...props
}) {
  let href = '#' + id;
  return /*#__PURE__*/React.createElement(NavItem, null, /*#__PURE__*/React.createElement("a", {
    className: "nav-link text-white accordion-toggle font-size-sm collapsed",
    href: href,
    "data-toggle": "collapse",
    "aria-expanded": "true"
  }, /*#__PURE__*/React.createElement(NavLink, {
    to: "/user",
    className: "nav-link text-white font-size-sm"
  }, /*#__PURE__*/React.createElement(IconText, {
    className: "p-1",
    icon: "fas fa-user",
    text: "User"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "collapse",
    id: id
  }, children));
}
export default NavItemCollapse;