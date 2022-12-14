import React from "react";
import classNames from "../classNames";

const defaultProps = {
    object: {},
    type: 'password',
};

function InputPassword({className, field, object, hidden, required, ...props}) {
    function onInput(e) {
        const value = e.target.value;
        e.target.setCustomValidity('');
        object[field] = value;
    }

    function showPasswordClick(e) {
        const input = e.target.previousElementSibling;
        const isText = input.type === 'text';
        input.type = isText ? 'password' : 'text';
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
                defaultValue={value}
                className={classNames('form-control border-end-0 pe-0', className)}
                name={field}
                onInput={onInput}
                required={!object.id && required}
                {...props}/>
            <button
                type="button"
                className="btn btn-link text-muted shadow-none bi bi-eye-slash"
                onClick={showPasswordClick}>
            </button>
        </div>
    )
}

InputPassword.defaultProps = defaultProps;

export default InputPassword;
