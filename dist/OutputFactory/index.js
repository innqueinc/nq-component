function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import OutputString from "./type/OutputString";
import OutputDate from "./type/OutputDate";
import OutputBoolean from "./type/OutputBoolean";
function OutputFactory({
  type,
  field,
  object,
  ...options
}) {
  switch (type) {
    case 'Email':
    case 'String':
    case 'Text':
    case 'Number':
    case 'Tel':
      return /*#__PURE__*/React.createElement(OutputString, _extends({
        field: field,
        object: object
      }, options));
    case 'Boolean':
      return /*#__PURE__*/React.createElement(OutputBoolean, _extends({
        field: field,
        object: object
      }, options));
    case 'Date':
      return /*#__PURE__*/React.createElement(OutputDate, _extends({
        field: field,
        object: object
      }, options));
    // case 'Pointer':
    //     return <OutputPointer
    //         field={field}
    //         object={object}
    //         {...options}/>;
    default:
      return null;
  }
}
export default OutputFactory;