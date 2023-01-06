import React, {Fragment} from 'react';
import IconText from '../Nav/IconText';
import Nav from '../Nav';
import NavItem from '../Nav/NavItem';
import Accordion from '../Accordion';
import Anchor from '../Anchor';

function Sidebar({menus, anchor}) {
    return (
        <Nav>
            {
                menus.map((menu, i) => {
                    const key = i;
                    const {label, icon, route} = menu;
                    if (Array.isArray(route)) {
                        return (
                            <Fragment key={key}>
                                <NavItem>
                                    <Accordion
                                        eventKey={key}
                                        className="nav-link text-white font-size-sm">
                                        <div className="d-inline-block">
                                            <IconText className="p-1" icon={icon} text={label}/>
                                        </div>
                                        <div className="float-right p-1">
                                            <i className="fas fa-chevron-down"></i>
                                        </div>
                                    </Accordion>
                                </NavItem>
                                <Accordion.Collapse eventKey={key}>
                                    <Sidebar anchor={anchor} menus={route}/>
                                </Accordion.Collapse>
                            </Fragment>
                        )
                    }
                    return (
                        <Item anchor={anchor} key={key} menu={menu}/>
                    )
                })
            }
        </Nav>
    )
}


function Item({menu, anchor}) {
    let {label, route, icon} = menu;
    return (
        <NavItem>
            <Anchor as={anchor} to={route} href={route}
                    className="nav-link text-white font-size-sm">
                <IconText text={label} icon={icon}/>
            </Anchor>
        </NavItem>
    )
}

Sidebar.Item = Item;
export default Sidebar;
