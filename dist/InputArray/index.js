import React from 'react';
import CreatableSelect from "react-select/creatable";
import createOption from "./createOption";
const components = {
  DropdownIndicator: null
};

function InputArray({
  name,
  object
}) {
  const [values, setValues] = React.useState((object[name] || []).map(createOption));
  const [value, setValue] = React.useState('');

  function onChange(_values) {
    setValues(_values);
  }

  function onInputChange(value) {
    setValue(value);
  }

  function onKeyDown(e) {
    switch (e.key) {
      case 'Enter':
      case 'Tab':
        e.preventDefault();
        setValues([...values, createOption(value)]);
        setValue('');
        object[name] = values.map(v => v.value);
    }
  }

  return /*#__PURE__*/React.createElement(CreatableSelect, {
    components: components,
    inputValue: value,
    isClearable: true,
    isMulti: true,
    menuIsOpen: false,
    onChange: onChange,
    onInputChange: onInputChange,
    onKeyDown: onKeyDown,
    placeholder: "Type something and press enter...",
    value: values
  });
}

export default InputArray;