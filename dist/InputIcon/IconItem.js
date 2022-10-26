function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function IconItem({
  data,
  innerRef,
  innerProps
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "react-select p-2 pl-3 cursor-pointer",
    ref: innerRef
  }, innerProps), /*#__PURE__*/React.createElement("i", {
    className: data.value
  }), /*#__PURE__*/React.createElement("span", {
    className: "ms-2"
  }, data.label));
}
export default IconItem;