import React from "react";
import OutputFactory from "./OutputFactory";
import Progress from "../Progress";
import InfiniteScroll from "react-infinite-scroller";
import Checkbox from "../Checkbox";
import camelToTitleCase from "../camelToTitleCase";


function Table({fields, objects, hasMore,progress, onItemClick, next, selected, onSelect, onSelectAll}) {
    return (
        <InfiniteScroll
            loadMore={next}
            hasMore={hasMore}
            initialLoad={true}>
            <div className="table-responsive shadow-sm mt-2 ">
                <table className="table mb-0 w-100 table-striped">
                    <thead className="table-dark">
                    <tr>
                        <th>
                            <Checkbox
                                className="align-middle"
                                id="check_all"
                                checked={objects.length === selected.length && objects.length !== 0}
                                onChange={checked => onSelectAll(checked)}
                            />
                        </th>
                        {Object.keys(fields).map((field) => {
                            const {type, ...options} = fields[field];
                            if (options.hasOwnProperty('read') && !options.read) return null;
                            const label = options.label || camelToTitleCase(field);
                            return (
                                <th key={field} className="fs-xs align-middle text-nowrap">{label}</th>
                            );
                        })}
                    </tr>
                    </thead>
                    <tbody className="bg-white">
                    {
                        (objects.length === 0 && !progress) && (
                            <tr>
                                <td className="text-center fs-lg" colSpan={Object.keys(fields).length + 1}>
                                    No Data Found
                                </td>
                            </tr>
                        )
                    }
                    {
                        objects.map((object, index) => {
                            const id = object.id;
                            const checked = selected.includes(object);
                            return (
                                <tr key={id}>
                                    <th className="align-middle">
                                        <Checkbox
                                            checked={checked}
                                            id={'check_' + id}
                                            onChange={() => onSelect(index)}
                                        />
                                    </th>
                                    {Object.keys(fields).map((field, i) => {
                                        const options = fields[field];
                                        if (options.hasOwnProperty('read') && !options.read) return null;
                                        return (
                                            <td key={field}
                                                className="fs-sm text-truncate"
                                                style={{
                                                    cursor: 'pointer',
                                                    maxWidth: '15em',
                                                }}
                                                onClick={() => onItemClick(index, field)}>
                                                <OutputFactory
                                                    field={field}
                                                    object={object}
                                                    {...options}
                                                />
                                            </td>
                                        );
                                    })}

                                </tr>
                            );
                        })
                    }
                    {
                        progress && (
                            <tr>
                                <td colSpan={Object.keys(fields).length + 1}><Progress className="fs-sm">Loading ...</Progress></td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </InfiniteScroll>
    )
}

export default Table;
