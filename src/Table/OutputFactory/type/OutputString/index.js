function OutputString({field, options, object}) {
    const value = object[field];
    if (value && typeof value !== 'object') {
        return value;
    }
    return null;
}

export default OutputString;
