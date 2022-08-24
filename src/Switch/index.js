import React from 'react';
import classNames from "../classNames";

function noop() {

}
const defaultProps = {
    onChange: noop,
    id: 'check-default'
};

const Switch = React.forwardRef(function Switch({className, id, onChange, checked, label, ...props}, ref) {
    const classes = classNames('form-check form-switch', className);
    return (
        <div className={classes}>
            <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                ref={ref}
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                id={id}
                {...props}
            />
            <label className="form-check-label" htmlFor={id}>{label}</label>
        </div>
    );
});

Switch.defaultProps = defaultProps;
export default Switch;
