import React from 'react';
import AsyncSelect from 'react-select/async';
import classNames from "../classNames";
import objectToOption from './objectToOption';
import GetOption from './GetOption';
import getIndexes from '../getIndexes';

function InputRelation({
  className,
  field,
  object,
  target,
  isMulti,
  schemas,
  find
}) {
  // get schema
  const schema = schemas.find(s => s.name === target);
  const indexes = React.useMemo(() => {
    const items = getIndexes(schema.fields);
    return items.length > 0 ? items : ['name'];
  }, [schema.fields]);
  const [value, setValue] = React.useState(); // set default value

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
    new GetOption(target, indexes, word, callback, find);
  }

  function onChange(_value) {
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
  }

  return /*#__PURE__*/React.createElement(AsyncSelect, {
    placeholder: `select ${name}`,
    classNamePrefix: "custom-form-control",
    menuPortalTarget: document.body,
    loadOptions: loadOptions,
    value: value,
    defaultOptions: true,
    onChange: onChange,
    className: classNames(className),
    isMulti: isMulti,
    cacheOptions: true
  });
}

export default InputRelation;