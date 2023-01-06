import React from 'react';
import {cx} from '../../utils/DomUtil';

const defaultProps = {
    className: 'row p-1',
};

function IconText({className, children, text, icon, ...props}) {
    const classes = cx(className, defaultProps.className);
    return (
        <div className={classes}>
            <div className="col-1">
                <i className={icon}/>
            </div>
            <div className="pl-2 col">{text}</div>
        </div>
    );
}

IconText.defaultProps = defaultProps;
export default IconText;
