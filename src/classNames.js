function classNames(...args) {
    const set = new Set();
    args.forEach(arg => {
        if (arg === undefined) return;
        if (typeof arg === 'string') {
            arg.split(' ').forEach(i=>set.add(i));
        }
    })
    return Array.from(set).join(' ');
}

export default classNames;
