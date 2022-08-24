function OutputString({field, options, object}) {
    const value = object[field];
    if (value) {
        return value;
    }
    return null;
}

export default OutputString;
