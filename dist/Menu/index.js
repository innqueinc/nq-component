import React from "react";
import { NavLink } from 'react-router-dom';
import Accordion from "../Accordion";
const defaultProps = {
  icon: 'bi bi-journal-text'
};

function Item(menu) {
  const {
    name,
    icon,
    label
  } = menu;
  const route = menu.route || '/class/' + name;

  if (Array.isArray(route)) {
    return /*#__PURE__*/React.createElement(ItemChild, menu);
  }

  return /*#__PURE__*/React.createElement("li", {
    className: "nav-item",
    key: route
  }, /*#__PURE__*/React.createElement(NavLink, {
    className: "nav-link",
    to: route
  }, /*#__PURE__*/React.createElement("i", {
    className: icon
  }), /*#__PURE__*/React.createElement("span", {
    className: "ms-2"
  }, label || name)));
}

Item.defaultProps = defaultProps;

function ItemChild({
  name,
  icon,
  route
}) {
  let key = name;
  return /*#__PURE__*/React.createElement(React.Fragment, {
    key: key
  }, /*#__PURE__*/React.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/React.createElement(Accordion, {
    eventKey: key,
    className: "nav-link font-size-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-inline-block"
  }, /*#__PURE__*/React.createElement("i", {
    className: icon
  }), /*#__PURE__*/React.createElement("span", {
    className: "ms-2"
  }, name)), /*#__PURE__*/React.createElement("div", {
    className: "float-end p-1"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-chevron-down"
  })))), /*#__PURE__*/React.createElement(Accordion.Collapse, {
    eventKey: key
  }, /*#__PURE__*/React.createElement("ul", {
    className: "navbar-nav ms-4"
  }, route.map((m, i) => {
    return /*#__PURE__*/React.createElement(Item, m);
  }))));
}

function Menu({
  menus
}) {
  function renderDivider(index) {
    return /*#__PURE__*/React.createElement("hr", {
      key: index,
      className: "dropdown-divider bg-light"
    });
  }

  return /*#__PURE__*/React.createElement("ul", {
    className: "navbar-nav"
  }, menus.map((menu, i) => {
    if (!Object.keys(menu).length) return renderDivider(i); // return renderItem(menu);

    return /*#__PURE__*/React.createElement(Item, menu);
  }));
}

export default Menu;