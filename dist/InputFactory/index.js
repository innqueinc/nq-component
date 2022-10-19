function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import InputString from '../InputString';
import InputPassword from '../InputPassword';
import InputDate from '../InputDate';
import InputNumber from '../InputNumber';
import InputSelect from '../InputSelect';
import InputText from '../InputText';
import InputRelation from '../InputRelation';
import InputImage from '../InputImage';
import InputBooleanCheckbox from '../InputBooleanCheckbox';

function InputFactory({
  type,
  _type,
  __type,
  field,
  object,
  ...options
}) {
  switch (_type || type) {
    case 'Email':
    case 'String':
      return /*#__PURE__*/React.createElement(InputString, _extends({
        field: field,
        type: __type || _type || type.toLowerCase(),
        object: object
      }, options));

    case 'Password':
      return /*#__PURE__*/React.createElement(InputPassword, _extends({
        field: field,
        object: object
      }, options));

    case 'Enum':
      return /*#__PURE__*/React.createElement(InputSelect, _extends({
        field: field,
        type: __type || _type || type.toLowerCase(),
        object: object,
        options: options.values
      }, options));

    case 'Number':
    case 'Tel':
      return /*#__PURE__*/React.createElement(InputNumber, _extends({
        field: field,
        object: object
      }, options));

    case 'Date':
      return /*#__PURE__*/React.createElement(InputDate, _extends({
        field: field,
        type: __type || _type || type.toLowerCase(),
        object: object
      }, options));

    case 'Text':
      return /*#__PURE__*/React.createElement(InputText, _extends({
        field: field,
        type: __type || _type || type.toLowerCase(),
        object: object
      }, options));

    case 'Relation':
    case 'Pointer':
      return /*#__PURE__*/React.createElement(InputRelation, _extends({
        isMulti: type === 'Relation',
        field: field,
        type: __type || _type || type.toLowerCase(),
        object: object
      }, options));

    case 'Image':
      return /*#__PURE__*/React.createElement(InputImage, _extends({
        field: field,
        type: __type || _type || type.toLowerCase(),
        object: object
      }, options));

    case 'Boolean':
      return /*#__PURE__*/React.createElement(InputBooleanCheckbox, _extends({
        id: object.id,
        field: field,
        type: __type || _type || type.toLowerCase(),
        object: object
      }, options));

    default:
      return null;
  }
}

export default InputFactory;