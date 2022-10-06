import classNames from "../classNames";
import React from "react";

function InputRadioGroup({
  className,
  name,
  document,
  options,
  ...props
}) {
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

  return /*#__PURE__*/React.createElement("div", {
    className: "d-flex flex-column text-wrap lh-1 w-100"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "gender",
    Gender: true
  }, /*#__PURE__*/React.createElement("small", null, /*#__PURE__*/React.createElement("strong", null, "Gender", /*#__PURE__*/React.createElement("span", {
    className: "text-danger"
  }, "*")))), /*#__PURE__*/React.createElement("div", {
    className: "d-flex justify-content-between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-check form-check-inline d-flex align-items-center"
  }, /*#__PURE__*/React.createElement("input", {
    onChange: onChangeMale,
    className: "form-check-input me-1",
    type: "radio",
    name: "inlineRadioOptions",
    id: "inlineRadio1",
    value: "option1"
  }), /*#__PURE__*/React.createElement("label", {
    className: "form-check-label pt-1",
    htmlFor: "inlineRadio1"
  }, /*#__PURE__*/React.createElement("small", null, "Male"))), /*#__PURE__*/React.createElement("div", {
    className: "form-check form-check-inline d-flex align-items-center pe-lg-5"
  }, /*#__PURE__*/React.createElement("input", {
    onChange: onChangeFemale,
    className: "form-check-input me-1",
    type: "radio",
    name: "inlineRadioOptions",
    id: "inlineRadio2",
    value: "option2"
  }), /*#__PURE__*/React.createElement("label", {
    className: "form-check-label pt-1",
    htmlFor: "inlineRadio2"
  }, /*#__PURE__*/React.createElement("small", null, "Female")))));
}

export default InputRadioGroup;