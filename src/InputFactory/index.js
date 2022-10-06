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


function InputFactory({type, _type, field, object, ...options}) {
    switch (_type || type) {
        case 'Email':
        case 'String':
            return <InputString
                field={field}
                type={type.toLowerCase()}
                object={object}
                {...options}/>;
        case 'Password':
            return <InputPassword
                field={field}
                object={object}
                {...options}/>;
        case 'Enum':
            return <InputSelect
                field={field}
                type={type.toLowerCase()}
                object={object}
                options={options.values}
                {...options}/>;
        case 'Number':
        case 'Tel':
            return <InputNumber
                field={field}
                object={object}
                {...options}/>;
        case 'Date':
            return <InputDate
                field={field}
                type={type.toLowerCase()}
                object={object}
                {...options}/>;
        case 'Text':
            return <InputText
                field={field}
                type={type.toLowerCase()}
                object={object}
                {...options}/>;
        case 'Relation':
        case 'Pointer':
            return <InputRelation
                isMulti={type === 'Relation'}
                field={field}
                type={type.toLowerCase()}
                object={object}
                {...options}/>;
        case 'Image':
            return <InputImage
                field={field}
                type={type.toLowerCase()}
                object={object}
                {...options}/>;
        case 'Boolean':
            return <InputBooleanCheckbox
                id={object.id}
                field={field}
                type={type.toLowerCase()}
                object={object}
                {...options}/>;
        default:
            return null;
    }
}

export default InputFactory;
