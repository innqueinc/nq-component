function OutputDate({field, options, object}) {
    const value = object[field];
    if (value) {
        return new Date(value).toLocaleDateString("en-US", { dateStyle: "medium" });
    }
    return null;
}

export default OutputDate;
