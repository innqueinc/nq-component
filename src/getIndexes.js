function getIndexes(fields) {
    return Object.entries(fields)
        .reduce((acc, [field, options]) => {
            if (options.index) acc.push(field);
            return acc;
        }, []);
}

export default getIndexes;
