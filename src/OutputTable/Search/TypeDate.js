import React from "react";
import DateType from "./DateType";

const keys = ['Daily', 'Weekly', 'Monthly', 'Custom'];


function TypeDate({field, onChange}) {
    const [key, setKey] = React.useState(keys[0]);
    return (
        <>
            <select
                onChange={e => setKey(e.target.value)}
                className="form-select shadow-none fs-xs w-auto rounded-0">
                {
                    keys
                        .map((key) => {
                            return (
                                <option key={key} value={key}>{key}</option>
                            );
                        })
                }
            </select>
            <DateType
                field={field}
                type={key}
                onChange={onChange}
            />
        </>
    )
}

export default TypeDate;
