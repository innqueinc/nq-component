import React from "react";
import camelToTitleCase from "../camelToTitleCase";
import OutputFactory from "../OutputFactory";
import Search from "./Search";
import InfiniteScroll from "react-infinite-scroller";
import Checkbox from "../Checkbox";
import Progress from "../Progress";

const fields = {}
const defaultProps = {
    fields: fields,
    limit: 10,
}

function OutputTable({collection, fields, limit, onItemClick, find}) {
    const [objects, setObjects] = React.useState([]);
    const [selectedObjects, setSelectedObjects] = React.useState([]);
    const [progress, setProgress] = React.useState(true);
    const [current, setCurrent] = React.useState(1);
    const [hasMore, setMore] = React.useState(false);

    function getData(where = {}) {
        const skip = (current - 1) * limit;
        const query = {
            count: true,
            limit: limit,
            skip: skip,
            where: where,
            include: ['all'],
            sort: {createdAt: -1}
        };
        setProgress(true);
        find.execute(collection, query)
            .then(({count, objects}) => {
                setObjects(objects);
                setMore(count > objects.length);
                setProgress(false);
            })
            .catch(error => {
                setProgress(false);
            });
    }

    React.useEffect(() => {
        getData();
    }, []);

    function onSelectAll(checked) {
        if (checked) {
            setSelectedObjects([...objects]);
        } else {
            setSelectedObjects([]);
        }
    }

    function onSelect(index) {
        const selected = objects[index];
        const i = selectedObjects.indexOf(selected);
        if (i > -1) {
            selectedObjects.splice(i, 1);
        } else {
            selectedObjects.push(selected);
        }
        setSelectedObjects([...selectedObjects]);
    }

    function searchSubmit(where) {
        setObjects([]);
        setCurrent(1);
        setMore(false);
        setProgress(true);
        getData(where);
    }

    function next() {
        if (!progress) {
            console.log('next');
            setProgress(true);
            setMore(false);
            setCurrent(current + 1);
            getData();
        }
    }

    return (
        <InfiniteScroll
            className="custom-class"
            loadMore={next}
            hasMore={hasMore}>
            <Search
                className="mb-3"
                onSubmit={searchSubmit.bind(this)}
                fields={fields}/>
            <div className="table-responsive shadow-sm mb-3">
                <table className="table table-striped">
                    <thead className="table-dark">
                    <tr>
                        <th>
                            <Checkbox
                                className="align-middle"
                                id="check_all"
                                checked={objects.length === selectedObjects.length && objects.length !== 0}
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
                            const checked = selectedObjects.includes(object);
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

OutputTable.defaultProps = defaultProps;
export default OutputTable;
