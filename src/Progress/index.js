import React from 'react';
import classNames from "../classNames";
import getValue from "../getValue";


function Progress({className, children, size = '', transaparent = false,}) {
    const classes = classNames(
        className,
        'd-flex justify-content-center align-items-center',
    );
    const classLoader = classNames(
        'loader rotate me-2',
        className,
        size,
        getValue(transaparent, 'transparent'),
    );
    return (
        <div className={classes}>
            <div className={classLoader}/>
            {/*<Spinner size="sm"/>*/}
            {children ? children : null}
        </div>
    );
}

export default Progress;
