import React from "react";
import classNames from "../classNames";

function Breadcrumb({children, className}) {
    const classes = classNames("breadcrumb", className);
    return (
        <nav>
            <ol className={classes}>
                {children}
            </ol>
        </nav>
    )
}

function Item({children, className, ...props}) {
    const classes = classNames("breadcrumb-item", className);
    return (
        <li className={classes} {...props}>
            {children}
        </li>
    )
}

Breadcrumb.Item = Item;
export default Breadcrumb;
