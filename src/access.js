function access(documents) {
    return documents.reduce((acc, cur) => {
        acc.read = acc.read || [];
        acc.write = acc.write || [];
        acc.read = [...acc.read,...cur.acl.read];
        acc.write = [...acc.write,...cur.acl.write];
        return acc;
    }, {});
}

export default access;
