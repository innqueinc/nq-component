import React, { Fragment } from 'react';
import IconText from '../Nav/IconText';
import Nav from '../Nav';
import NavItem from '../Nav/NavItem';
import Accordion from '../Accordion';
import Anchor from '../Anchor';
function Sidebar({
  menus,
  anchor
}) {
  return /*#__PURE__*/React.createElement(Nav, null, menus.map((menu, i) => {
    const key = i;
    const {
      label,
      icon,
      route
    } = menu;
    if (Array.isArray(route)) {
      return /*#__PURE__*/React.createElement(Fragment, {
        key: key
      }, /*#__PURE__*/React.createElement(NavItem, null, /*#__PURE__*/React.createElement(Accordion, {
        eventKey: key,
        className: "nav-link text-white font-size-sm"
      }, /*#__PURE__*/React.createElement("div", {
        className: "d-inline-block"
      }, /*#__PURE__*/React.createElement(IconText, {
        className: "p-1",
        icon: icon,
        text: label
      })), /*#__PURE__*/React.createElement("div", {
        className: "float-right p-1"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-chevron-down"
      })))), /*#__PURE__*/React.createElement(Accordion.Collapse, {
        eventKey: key
      }, /*#__PURE__*/React.createElement(Sidebar, {
        anchor: anchor,
        menus: route
      })));
    }
    return /*#__PURE__*/React.createElement(Item, {
      anchor: anchor,
      key: key,
      menu: menu
    });
  }));
}
function Item({
  menu,
  anchor
}) {
  let {
    label,
    route,
    icon
  } = menu;
  return /*#__PURE__*/React.createElement(NavItem, null, /*#__PURE__*/React.createElement(Anchor, {
    as: anchor,
    to: route,
    href: route,
    className: "nav-link text-white font-size-sm"
  }, /*#__PURE__*/React.createElement(IconText, {
    text: label,
    icon: icon
  })));
}
Sidebar.Item = Item;
export default Sidebar;