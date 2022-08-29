import React from 'react';
import CreatableSelect from "react-select/creatable";
import createOption from "./createOption";

const components = {
    DropdownIndicator: null,
};

function InputArray({name, object}) {
    const [values, setValues] = React.useState((object[field] || []).map(createOption));
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
                object[field] = values.map(v => v.value);
        }
    }


    return (
        <CreatableSelect
            components={components}
            inputValue={value}
            isClearable
            isMulti
            menuIsOpen={false}
            onChange={onChange}
            onInputChange={onInputChange}
            onKeyDown={onKeyDown}
            placeholder="Type something and press enter..."
            value={values}
        />
    );
}

export default InputArray;
