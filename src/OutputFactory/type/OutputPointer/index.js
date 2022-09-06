import getIndexes from '../../../../getIndexes';
import React from "react";
import Context from "../../../../AppContext";
import getSchemaByClass from "../../../../getSchemaByClass";

function OutputPointer({field, object, target, ...options}) {
    const {schemas} = React.useContext(Context);
    const schema = getSchemaByClass(schemas, target);
    const indexes = getIndexes(schema.fields);

    const pointer = object[field];
    if (pointer) {
        return indexes.map((index) => pointer[index]).join(' ');
    }
    return null;
}

export default OutputPointer;
