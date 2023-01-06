import classNames from "../classNames";
import React from "react";
import Layout from "../Layout";


const defaultProps = {
    icon: 'bi bi-list',
    logo: '/assets/images/logo.svg',
}

function NavBar({className, onToggle, icon, logo, children, title, titleClick}) {
    const classes = classNames(className, "navbar navbar-expand-lg navbar-light bg-white");
    const {collapsed, setCollapse} = React.useContext(Layout.Context);

    function click() {
        if (onToggle) {
            onToggle();
        } else {
            setCollapse(!collapsed);
        }
    }

    return (
        <nav className={classes}>
            <div className="container-fluid">
                <button
                    onClick={click}
                    type="button"
                    className="btn btn-sm btn-link fs-4 ps-0 text-dark">
                    <i className={icon}></i>
                </button>
                <a href="# " onClick={titleClick} className="navbar-brand me-auto">
                    {
                        logo && <img className="w-auto me-2" height="38" src={logo} alt="logo"/>
                    }
                    {
                        title && title
                    }
                </a>
                {
                    children
                }
            </div>
        </nav>
    )
}

NavBar.defaultProps = defaultProps;
export default NavBar;
