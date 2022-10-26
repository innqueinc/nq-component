import React from 'react';
import InputType from "./InputType";
let timeout;
const types = ['String', 'Date'];
function Search({
  className,
  fields,
  onSubmit
}) {
  const [key, setKey] = React.useState();
  const [where, setWhere] = React.useState({});
  function submit(e) {
    e.preventDefault();
    onSubmit(where);
  }
  React.useEffect(() => {
    const keys = Object.keys(fields);
    setKey(keys[0]);
  }, [fields]);
  function onChange(where) {
    setWhere(where);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      onSubmit(where);
    }, 300);
  }
  return /*#__PURE__*/React.createElement("form", {
    className: className,
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("div", {
    className: "d-flex justify-content-end"
  }, /*#__PURE__*/React.createElement("span", {
    className: "input-group-text rounded-0 rounded-start"
  }, /*#__PURE__*/React.createElement("i", {
    className: "bi bi-search"
  })), /*#__PURE__*/React.createElement("select", {
    value: key,
    className: "form-select shadow-none fs-xs w-auto rounded-0",
    onChange: e => setKey(e.target.value)
  }, Object.keys(fields).map(key => {
    const options = fields[key];
    if (!types.includes(options.type)) return null;
    if (options.hasOwnProperty('read') && !options.read) return null;
    return /*#__PURE__*/React.createElement("option", {
      key: key,
      value: key
    }, key);
  })), fields[key] && /*#__PURE__*/React.createElement(InputType, {
    type: fields[key].type,
    field: key,
    onChange: onChange
  })));
}
export default Search;