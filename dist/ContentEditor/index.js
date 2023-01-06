function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from "react";
import classNames from "../classNames";
import Editable from "./Editable";
function noop() {}
const defaultProps = {
  onReady: noop,
  onEnter: noop
};
function ContentEditor({
  className,
  onSubmit,
  children,
  onReady,
  onEnter,
  ...props
}) {
  const classes = classNames('outline-0', className);
  const ref = React.useRef();
  React.useEffect(() => {
    const editable = new Editable(ref.current);
    editable.enable();
    onReady(editable);
    return () => {
      editable.disable();
    };
  }, [onReady]);
  return /*#__PURE__*/React.createElement("div", _extends({
    suppressContentEditableWarning: true,
    ref: ref,
    className: classes
  }, props), children);
}
ContentEditor.defaultProps = defaultProps;
export default ContentEditor;