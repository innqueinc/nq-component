function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import OutputFactory from "./OutputFactory";
import Progress from "../Progress";
import InfiniteScroll from "react-infinite-scroller";
import Checkbox from "../Checkbox";
import camelToTitleCase from "../camelToTitleCase";

function Table({
  fields,
  objects,
  hasMore,
  progress,
  onItemClick,
  next,
  selected,
  onSelect,
  onSelectAll
}) {
  return /*#__PURE__*/React.createElement(InfiniteScroll, {
    loadMore: next,
    hasMore: hasMore,
    initialLoad: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "table-responsive shadow-sm mt-2 "
  }, /*#__PURE__*/React.createElement("table", {
    className: "table mb-0 w-100 table-striped"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "table-dark"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement(Checkbox, {
    className: "align-middle",
    id: "check_all",
    checked: objects.length === selected.length && objects.length !== 0,
    onChange: checked => onSelectAll(checked)
  })), Object.keys(fields).map(field => {
    const {
      type,
      ...options
    } = fields[field];
    if (options.hasOwnProperty('read') && !options.read) return null;
    const label = options.label || camelToTitleCase(field);
    return /*#__PURE__*/React.createElement("th", {
      key: field,
      className: "fs-xs align-middle text-nowrap"
    }, label);
  }))), /*#__PURE__*/React.createElement("tbody", {
    className: "bg-white"
  }, objects.length === 0 && !progress && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    className: "text-center fs-lg",
    colSpan: Object.keys(fields).length + 1
  }, "No Data Found")), objects.map((object, index) => {
    const id = object.id;
    const checked = selected.includes(object);
    return /*#__PURE__*/React.createElement("tr", {
      key: id
    }, /*#__PURE__*/React.createElement("th", {
      className: "align-middle"
    }, /*#__PURE__*/React.createElement(Checkbox, {
      checked: checked,
      id: 'check_' + id,
      onChange: () => onSelect(index)
    })), Object.keys(fields).map((field, i) => {
      const options = fields[field];
      if (options.hasOwnProperty('read') && !options.read) return null;
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
    }));
  }), progress && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: Object.keys(fields).length + 1
  }, /*#__PURE__*/React.createElement(Progress, {
    className: "fs-sm"
  }, "Loading ...")))))));
}

export default Table;