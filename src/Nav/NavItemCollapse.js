import React from 'react';
import { NavLink } from 'react-router-dom';
import NavItem from './NavItem';
import IconText from './IconText';

function NavItemCollapse({ children, id, ...props }) {
  console.log(children[0]);
  let href = '#' + id;
  return (
    <NavItem>
      <a
        className="nav-link text-white accordion-toggle font-size-sm collapsed"
        href={href}
        data-toggle="collapse"
        aria-expanded="true"
      >
        <NavLink to="/user" className="nav-link text-white font-size-sm">
          <IconText className="p-1" icon="fas fa-user" text="User" />
        </NavLink>

        {/*<div className="d-inline-block">*/}
        {/*<IconText className="p-1" icon="fas fa-users" text="EMPLOYEE MANAGEMENT"/>*/}
        {/*</div>*/}
        {/*<div className="float-right p-1">*/}
        {/*<i className="fas fa-chevron-down"></i>*/}
        {/*</div>*/}
      </a>
      <div className="collapse" id={id}>
        {children}
      </div>
    </NavItem>
  );
}

export default NavItemCollapse;
