import React from "react";

const Context = React.createContext({});

function Layout({children,...props}) {
    const [collapsed, setCollapse] = React.useState(true);
    function getValue() {
        return {
            collapsed,
            setCollapse,
        };
    }

    return <Context.Provider value={getValue()}>{children}</Context.Provider>;
}

Layout.Context = Context;
export default Layout;
