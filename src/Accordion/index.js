import React from 'react';
import classNames from "../classNames";

const defaultProps = {};

function Accordion({className, children, eventKey, ...props}) {
    const classes = classNames(className, 'accordion-toggle collapsed');
    return (
        <a
            className={classes}
            href={'#' + eventKey}
            data-bs-toggle="collapse"
            aria-expanded="true">
            {children}
        </a>
    );
}

function Collapse({children, eventKey, ...props}) {
    return (
        <div className="collapse" id={eventKey}>
            {children}
        </div>
    );
}

Accordion.Collapse = Collapse;
Accordion.defaultProps = defaultProps;
export default Accordion;
