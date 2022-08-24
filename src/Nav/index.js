import React from 'react';

function Nav({ children, ...props }) {
  return <ul className="nav flex-column">{children}</ul>;
}

export default Nav;
