import React from "react";

const defaultProps = {
    hasMore: false
};

function Scroll({loadMore, hasMore, children}) {
    return (
        <div
            loadMore={loadMore}
            hasMore={hasMore}
            initialLoad={true}>
            {children}
        </div>
    )
}

Scroll.defaultProps = defaultProps;
export default Scroll;
