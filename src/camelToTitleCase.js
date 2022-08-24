function camelToTitleCase(camelCase) {
    return camelCase
        .replace(/([A-Z])/g, match => ` ${match}`)
        .replace(/^./, match => match.toUpperCase())
        .trim("");
}

export default camelToTitleCase;
