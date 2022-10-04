import React from "react";
import OutputFactory from "../OutputFactory";
import Progress from "../Progress";
import InfiniteScroll from "react-infinite-scroller";
import Checkbox from "../Checkbox";

const noop = () => {
}
const defaultProps = {
    fields: {},
    objects: [],
    excludeFields: [],
    selected: [],
    hasMore: false,
    progress: false,
    onItemClick: noop,
    onSelect: noop,
    onSelectAll: noop,
    readOnly: false,
    transformLabel: key => key,
    actions: []
}

function Table({
                   className,
                   fields,
                   objects,
                   hasMore,
                   progress,
                   onItemClick,
                   next,
                   selected,
                   onSelect,
                   onSelectAll,
                   excludeFields,
                   readOnly,
                   transformLabel,
                   actions
               }) {
    return (
        <InfiniteScroll
            className={className}
            loadMore={next}
            hasMore={hasMore}
            initialLoad={true}>
            <div className="table-responsive shadow-sm mt-2 ">
                <table className="table mb-0 w-100 table-striped">
                    <thead className="table-dark">
                    <tr>
                        {!readOnly && (
                            <th>
                                <Checkbox
                                    className="align-middle"
                                    id="check_all"
                                    checked={objects.length === selected.length && objects.length !== 0}
                                    onChange={checked => onSelectAll(checked)}
                                />
                            </th>
                        )}
                        {Object.keys(fields).map((field) => {
                            const {type, ...options} = fields[field];
                            if (options.hasOwnProperty('_read') && !options._read) return null;
                            if (excludeFields.includes(field)) return null;
                            const label = options._label || field;
                            return (
                                <th key={field} className="fs-xs align-middle text-nowrap">{transformLabel(label)}</th>
                            );
                        })}
                        {actions.length > 0 && (
                            <th
                                className="fs-xs align-middle text-nowrap"
                                colSpan={actions.length}>{transformLabel('Operation')}</th>
                        )}
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
                                    {!readOnly && (
                                        <th className="align-middle">
                                            <Checkbox
                                                checked={checked}
                                                id={'check_' + id}
                                                onChange={() => onSelect(index)}
                                            />
                                        </th>
                                    )}
                                    {Object.keys(fields).map((field, i) => {
                                        const options = fields[field];
                                        if (options.hasOwnProperty('_read') && !options._read) return null;
                                        if (excludeFields.includes(field)) return null;
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
                                    {
                                        actions.map((action) => {
                                            return (
                                                <td
                                                    className="text-truncate">
                                                    <button
                                                        onClick={action.onClick && action.onClick.bind(this, index)}
                                                        className="btn btn-primary btn-sm fs-xs shadow-none">
                                                        <i className={action.icon}/> {action.label}
                                                    </button>
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            );
                        })
                    }
                    {
                        progress && (
                            <tr>
                                <td colSpan={Object.keys(fields).length + 1}><Progress className="fs-sm">Loading
                                    ...</Progress></td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </InfiniteScroll>
    )
}

Table.defaultProps = defaultProps;
export default Table;
