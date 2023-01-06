function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from "react";
import classNames from "./classNames";
const defaultProps = {
  as: "div"
};
export default function createWithBSPrefix(prefix) {
  const BSComponent = /*#__PURE__*/React.forwardRef((props, ref) => {
    const {
      className,
      as: Tag,
      ...rest
    } = props;
    return /*#__PURE__*/React.createElement(Tag, _extends({
      className: classNames(prefix, className),
      ref: ref
    }, rest));
  });
  BSComponent.defaultProps = defaultProps;
  return BSComponent;
}