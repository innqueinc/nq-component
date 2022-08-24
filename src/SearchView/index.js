import React from "react";
import classNames from "../classNames";

const defaultProps = {
    object: {},
    type: 'password',
};

function SearchView({className, field, object, hidden, ...props}) {
    const classes = classNames('form-control border-end-0 pe-0', className);
    const ref = React.useRef();

    function onInput(e) {
        const value = e.target.value;
        object[field] = value;
    }

    function showPasswordClick(e) {
        const isText = ref.current.type === 'text';
        ref.current.type = isText ? 'password' : 'text';
        if (isText) {
            e.target.classList.add("bi-eye-slash");
            e.target.classList.remove("bi-eye");
        } else {
            e.target.classList.remove("bi-eye-slash");
            e.target.classList.add("bi-eye");
        }
    }

    const value = object[field];
    return (
        <div className="input-group">
            <input
                autoComplete="new-password"
                ref={ref}
                defaultValue={value}
                className={classes}
                name={field}
                onInput={onInput}
                {...props}/>
            <button
                type="button"
                className="btn btn-link text-muted shadow-none bi bi-search"
                onClick={showPasswordClick}>
            </button>
        </div>
    )
}

SearchView.defaultProps = defaultProps;

export default SearchView;
