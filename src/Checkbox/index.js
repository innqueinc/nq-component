import React from 'react';
import classNames from "../classNames";

function noop() {

}

const defaultProps = {
    onChange: noop,
    id: 'check-default'
};

const Checkbox = React.forwardRef(function Checkbox({className, id, onChange, checked, label, ...props}, ref) {
    const classes = classNames('custom-control custom-checkbox', className);
    return (
        <div className={classes}>
            <input
                type="checkbox"
                ref={ref}
                className="custom-control-input"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                id={id}
                {...props}
            />
            <label className="custom-control-label" htmlFor={id}>
                {label}
            </label>
        </div>
    );
});

Checkbox.defaultProps = defaultProps;
export default Checkbox;
