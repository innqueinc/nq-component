function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from "react";
import OutputFactory from "../OutputFactory";
import Progress from "../Progress";
import Checkbox from "../Checkbox";
const noop = () => {};
const defaultProps = {
  fields: {},
  objects: [],
  excludeFields: [],
  selected: [],
  hasMore: false,
  progress: false,
  onItemClick: noop,
  onSelect: noop,
  onSelectAll: noop,
  readOnly: false,
  transformLabel: key => key,
  actions: []
};
function Table({
  className,
  fields,
  objects,
  hasMore,
  progress,
  onItemClick,
  next,
  selected,
  onSelect,
  onSelectAll,
  excludeFields,
  readOnly,
  transformLabel,
  actions
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    loadMore: next,
    hasMore: hasMore,
    initialLoad: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "table-responsive shadow-sm mt-2 "
  }, /*#__PURE__*/React.createElement("table", {
    className: "table mb-0 w-100 table-striped"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "table-dark"
  }, /*#__PURE__*/React.createElement("tr", null, !readOnly && /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement(Checkbox, {
    className: "align-middle",
    id: "check_all",
    checked: objects.length === selected.length && objects.length !== 0,
    onChange: checked => onSelectAll(checked)
  })), Object.keys(fields).map(field => {
    const {
      type,
      ...options
    } = fields[field];
    if (options.hasOwnProperty('_read') && !options._read) return null;
    if (excludeFields.includes(field)) return null;
    const label = options._label || field;
    return /*#__PURE__*/React.createElement("th", {
      key: field,
      className: "fs-xs align-middle text-nowrap"
    }, transformLabel(label));
  }), actions.length > 0 && /*#__PURE__*/React.createElement("th", {
    className: "fs-xs align-middle text-nowrap",
    colSpan: actions.length
  }, transformLabel('Operation')))), /*#__PURE__*/React.createElement("tbody", {
    className: "bg-white"
  }, objects.length === 0 && !progress && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "text-center fs-lg",
    colSpan: Object.keys(fields).length + 1
  }, "No Data Found")), objects.map((object, index) => {
    const id = object.id;
    const checked = selected.includes(object);
    return /*#__PURE__*/React.createElement("tr", {
      key: id
    }, !readOnly && /*#__PURE__*/React.createElement("th", {
      className: "align-middle"
    }, /*#__PURE__*/React.createElement(Checkbox, {
      checked: checked,
      id: 'check_' + id,
      onChange: () => onSelect(index)
    })), Object.keys(fields).map((field, i) => {
      const options = fields[field];
      if (options.hasOwnProperty('_read') && !options._read) return null;
      if (excludeFields.includes(field)) return null;
      return /*#__PURE__*/React.createElement("td", {
        key: field,
        className: "fs-sm text-truncate",
        style: {
          cursor: 'pointer',
          maxWidth: '15em'
        },
        onClick: () => onItemClick(index, field)
      }, /*#__PURE__*/React.createElement(OutputFactory, _extends({
        field: field,
        object: object
      }, options)));
    }), actions.map(action => {
      return /*#__PURE__*/React.createElement("td", {
        className: "text-truncate"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: action.onClick && action.onClick.bind(this, index),
        className: "btn btn-primary btn-sm fs-xs shadow-none"
      }, /*#__PURE__*/React.createElement("i", {
        className: action.icon
      }), " ", action.label));
    }));
  }), progress && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: Object.keys(fields).length + 1
  }, /*#__PURE__*/React.createElement(Progress, {
    className: "fs-sm"
  }, "Loading ...")))))));
}
Table.defaultProps = defaultProps;
export default Table;