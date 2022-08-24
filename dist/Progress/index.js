import React from 'react';
import classNames from "../classNames";
import getValue from "../getValue";

function Progress({
  className,
  children,
  size = '',
  transaparent = false
}) {
  const classes = classNames(className, 'd-flex justify-content-center align-items-center');
  const classLoader = classNames('loader rotate me-2', className, size, getValue(transaparent, 'transparent'));
  return /*#__PURE__*/React.createElement("div", {
    className: classes
  }, /*#__PURE__*/React.createElement("div", {
    className: classLoader
  }), children ? children : null);
}

export default Progress;