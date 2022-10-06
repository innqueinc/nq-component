import classNames from "../classNames";
import React from "react";

function InputRadioGroup({className, name, document, options, ...props}) {
    const classes = classNames('form-select fs-sm', className);

    function onChangeMale(e) {
        const value = e.target.checked;
        if (value) {
            document[name] = 'Male';
        }
    }

    function onChangeFemale(e) {
        const value = e.target.checked;
        if (value) {
            document[name] = 'Female';
        }
    }

    return (
        <div className="d-flex flex-column text-wrap lh-1 w-100">
            <label htmlFor="gender" Gender>
                <small>
                    <strong>
                        Gender
                        <span className="text-danger">*</span>
                    </strong>
                </small>
            </label>
            <div className="d-flex justify-content-between">
                <div
                    className="form-check form-check-inline d-flex align-items-center">
                    <input
                        onChange={onChangeMale}
                        className="form-check-input me-1"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio1"
                        value="option1"
                    />
                    <label
                        className="form-check-label pt-1"
                        htmlFor="inlineRadio1"
                    >
                        <small>Male</small>
                    </label>
                </div>
                <div
                    className="form-check form-check-inline d-flex align-items-center pe-lg-5">
                    <input
                        onChange={onChangeFemale}
                        className="form-check-input me-1"
                        type="radio"
                        name="inlineRadioOptions"
                        id="inlineRadio2"
                        value="option2"
                    />
                    <label
                        className="form-check-label pt-1"
                        htmlFor="inlineRadio2"
                    >
                        <small>Female</small>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default InputRadioGroup;
