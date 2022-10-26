function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from "react";
import camelToTitleCase from "../camelToTitleCase";
import OutputFactory from "../OutputFactory";
import Search from "./Search";
import InfiniteScroll from "react-infinite-scroller";
import Checkbox from "../Checkbox";
import Progress from "../Progress";
const fields = {};
const defaultProps = {
  fields: fields,
  limit: 10
};
function OutputTable({
  collection,
  fields,
  limit,
  onItemClick,
  find
}) {
  const [objects, setObjects] = React.useState([]);
  const [selectedObjects, setSelectedObjects] = React.useState([]);
  const [progress, setProgress] = React.useState(true);
  const [current, setCurrent] = React.useState(1);
  const [hasMore, setMore] = React.useState(false);
  function getData(where = {}) {
    const skip = (current - 1) * limit;
    const query = {
      count: true,
      limit: limit,
      skip: skip,
      where: where,
      include: ['all'],
      sort: {
        createdAt: -1
      }
    };
    setProgress(true);
    find.execute(collection, query).then(({
      count,
      objects
    }) => {
      setObjects(objects);
      setMore(count > objects.length);
      setProgress(false);
    }).catch(error => {
      setProgress(false);
    });
  }
  React.useEffect(() => {
    getData();
  }, []);
  function onSelectAll(checked) {
    if (checked) {
      setSelectedObjects([...objects]);
    } else {
      setSelectedObjects([]);
    }
  }
  function onSelect(index) {
    const selected = objects[index];
    const i = selectedObjects.indexOf(selected);
    if (i > -1) {
      selectedObjects.splice(i, 1);
    } else {
      selectedObjects.push(selected);
    }
    setSelectedObjects([...selectedObjects]);
  }
  function searchSubmit(where) {
    setObjects([]);
    setCurrent(1);
    setMore(false);
    setProgress(true);
    getData(where);
  }
  function next() {
    if (!progress) {
      console.log('next');
      setProgress(true);
      setMore(false);
      setCurrent(current + 1);
      getData();
    }
  }
  return /*#__PURE__*/React.createElement(InfiniteScroll, {
    className: "custom-class",
    loadMore: next,
    hasMore: hasMore
  }, /*#__PURE__*/React.createElement(Search, {
    className: "mb-3",
    onSubmit: searchSubmit.bind(this),
    fields: fields
  }), /*#__PURE__*/React.createElement("div", {
    className: "table-responsive shadow-sm mb-3"
  }, /*#__PURE__*/React.createElement("table", {
    className: "table table-striped"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "table-dark"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, /*#__PURE__*/React.createElement(Checkbox, {
    className: "align-middle",
    id: "check_all",
    checked: objects.length === selectedObjects.length && objects.length !== 0,
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
    const checked = selectedObjects.includes(object);
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
OutputTable.defaultProps = defaultProps;
export default OutputTable;