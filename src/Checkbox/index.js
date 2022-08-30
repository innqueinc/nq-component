import React from 'react';
import classNames from "../classNames";

function noop() {

}

const defaultProps = {
    onChange: noop,
    id: 'check-default',
    type: 'checkbox'
};

const Checkbox = React.forwardRef(function Checkbox({className, id, onChange, checked, label, type, ...props}, ref) {
    const classes = classNames('form-check', className);
    return (
        <div className={classes}>
            <input
                type={type}
                ref={ref}
                className="form-check-input"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                id={id}
                {...props}
            />
            <label className="form-check-label" htmlFor={id}>
                {label}
            </label>
        </div>
    );
});

Checkbox.defaultProps = defaultProps;
export default Checkbox;
