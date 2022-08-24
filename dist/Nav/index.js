import React from 'react';

function Nav({
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("ul", {
    className: "nav flex-column"
  }, children);
}

export default Nav;