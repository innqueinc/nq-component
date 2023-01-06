import React from "react";
const defaultProps = {
  hasMore: false
};
function Scroll({
  loadMore,
  hasMore,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    loadMore: loadMore,
    hasMore: hasMore,
    initialLoad: true
  }, children);
}
Scroll.defaultProps = defaultProps;
export default Scroll;