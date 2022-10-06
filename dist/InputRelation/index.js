function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import AsyncSelect from 'react-select/async';
import classNames from "../classNames";
import objectToOption from './objectToOption';
import GetOption from './GetOption';
import getIndexes from '../getIndexes';
const defaultProps = {
  where: {},
  onChange: () => {}
};

function InputRelation({
  className,
  field,
  object,
  target,
  isMulti,
  schemas,
  find,
  where,
  disabled,
  onChange,
  ...props
}) {
  // get schema
  const schema = schemas.find(s => s.name === target);
  const indexes = React.useMemo(() => {
    const items = getIndexes(schema.fields);
    return items.length > 0 ? items : ['name'];
  }, [schema.fields]);
  const [value, setValue] = React.useState([]); // set default value

  React.useEffect(() => {
    const defaultValue = object[field];

    if (isMulti) {
      defaultValue && setValue(defaultValue.map(obj => objectToOption(obj, indexes)));
      object[field] = [];
    } else {
      defaultValue && setValue(objectToOption(defaultValue, indexes));
    }
  }, [object, name, indexes]);

  function loadOptions(word, callback) {
    new GetOption(target, indexes, word, callback, find, where);
  }

  function _onChange(_value) {
    if (isMulti) {
      const added = _value.filter(i => !value.includes(i)).map(o => ({
        id: o.id
      }));

      const removed = value.filter(i => !_value.includes(i)).map(o => ({
        id: o.id,
        __operation: 'REMOVE'
      }));
      const objects = [...added, ...removed];
      object[field] = [...objects, ...object[field].filter(a => !objects.find(b => a.id === b.id))];
      setValue(_value);
    } else {
      setValue(_value);
      object[field] = {
        id: _value.id
      };
    }

    onChange(object[field]);
  }

  return /*#__PURE__*/React.createElement(AsyncSelect, _extends({
    placeholder: `select ${name}`,
    classNamePrefix: "custom-form-control",
    menuPortalTarget: document.body,
    loadOptions: loadOptions,
    value: value,
    defaultOptions: true,
    onChange: _onChange,
    className: classNames(className),
    isMulti: isMulti,
    cacheOptions: true,
    isDisabled: disabled
  }, props));
}

InputRelation.defaultProps = defaultProps;
export default InputRelation;