import React from "react";
import InfiniteScroll from "react-infinite-scroller";
const defaultProps = {
  hasMore: false
};
function Scroll({
  loadMore,
  hasMore,
  children
}) {
  return /*#__PURE__*/React.createElement(InfiniteScroll, {
    loadMore: loadMore,
    hasMore: hasMore,
    initialLoad: true
  }, children);
}
Scroll.defaultProps = defaultProps;
export default Scroll;