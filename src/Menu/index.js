import React from "react";
import {NavLink} from 'react-router-dom';
import Accordion from "../Accordion";

const defaultProps = {
    icon: 'bi bi-journal-text'
}

function Item(menu) {
    const {name, icon, label} = menu;
    const route = menu.route || '/class/' + name;
    if (Array.isArray(route)) {
        return <ItemChild {...menu}/>
    }
    return (
        <li className="nav-item" key={route}>
            <NavLink className="nav-link" to={route}>
                <i className={icon}></i>
                <span className="ms-2">{label || name}</span>
            </NavLink>

        </li>
    )
}

Item.defaultProps = defaultProps;

function ItemChild({name, icon, route}) {
    let key = name;
    return (
        <React.Fragment key={key}>
            <li className="nav-item">
                <Accordion
                    eventKey={key}
                    className="nav-link font-size-sm">
                    <div className="d-inline-block">
                        <i className={icon}></i>
                        <span className="ms-2">{name}</span>
                    </div>
                    <div className="float-end p-1">
                        <i className="bi bi-chevron-down"></i>
                    </div>
                </Accordion>
            </li>
            <Accordion.Collapse eventKey={key}>
                <ul className="navbar-nav ms-4">
                    {route.map((m, i) => {
                        return <Item {...m}/>
                    })}
                </ul>
            </Accordion.Collapse>
        </React.Fragment>
    );
}

function Menu({menus}) {
    function renderDivider(index) {
        return (<hr key={index} className="dropdown-divider bg-light"/>)
    }

    return (
        <ul className="navbar-nav">
            {/*<li>*/}
            {/*    <div className="text-muted small fw-bold text-uppercase">Features</div>*/}
            {/*</li>*/}
            {
                menus.map((menu, i) => {
                    if (!Object.keys(menu).length) return renderDivider(i);
                    // return renderItem(menu);
                    return <Item {...menu}/>
                })
            }

        </ul>

    );
}

export default Menu;
