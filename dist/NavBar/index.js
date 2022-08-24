import classNames from "../classNames";
import React from "react";
import Layout from "../Layout";
const defaultProps = {
  icon: 'bi bi-list',
  logo: '/assets/images/logo.svg'
};

function NavBar({
  className,
  onToggle,
  icon,
  logo,
  children,
  title,
  titleClick
}) {
  const classes = classNames(className, "navbar navbar-expand-lg navbar-light bg-white");
  const {
    collapsed,
    setCollapse
  } = React.useContext(Layout.Context);

  function click() {
    if (onToggle) {
      onToggle();
    } else {
      setCollapse(!collapsed);
    }
  }

  return /*#__PURE__*/React.createElement("nav", {
    className: classes
  }, /*#__PURE__*/React.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: click,
    type: "button",
    className: "btn btn-sm btn-link fs-4 ps-0 text-dark"
  }, /*#__PURE__*/React.createElement("i", {
    className: icon
  })), /*#__PURE__*/React.createElement("a", {
    href: "# ",
    onClick: titleClick,
    className: "navbar-brand   me-auto"
  }, title && title, !title && /*#__PURE__*/React.createElement("img", {
    className: "img-fluid mb-1",
    width: "150",
    src: logo,
    alt: "logo"
  })), children));
}

NavBar.defaultProps = defaultProps;
export default NavBar;