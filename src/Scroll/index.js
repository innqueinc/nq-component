import React from "react";
import InfiniteScroll from "react-infinite-scroller";

const defaultProps = {
    hasMore: false
};

function Scroll({loadMore, hasMore, children}) {
    return (
        <InfiniteScroll
            loadMore={loadMore}
            hasMore={hasMore}
            initialLoad={true}>
            {children}
        </InfiniteScroll>
    )
}

Scroll.defaultProps = defaultProps;
export default Scroll;
