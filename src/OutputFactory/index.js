import React from 'react';
import OutputString from "./type/OutputString";
import OutputDate from "./type/OutputDate";
import OutputBoolean from "./type/OutputBoolean";

function OutputFactory({type, field, object, ...options}) {
    switch (type) {
        case 'Email':
        case 'String':
        case 'Text':
        case 'Number':
        case 'Tel':
            return <OutputString
                field={field}
                object={object}
                {...options}/>;
        case 'Boolean':
            return <OutputBoolean
                field={field}
                object={object}
                {...options}/>;
        case 'Date':
            return <OutputDate
                field={field}
                object={object}
                {...options}/>;
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
