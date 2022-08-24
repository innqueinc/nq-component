function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import Progress from "../Progress";
import classNames from "../classNames";
import Spinner from "../Spinner";
const defaultProps = {};

function Button({
  className,
  progress,
  children,
  disabled,
  ...props
}) {
  const defaultStyle = {
    cursor: progress ? "wait" : ""
  };
  const attributes = {
    className: classNames(className, 'btn btn-primary'),
    style: { ...defaultStyle
    },
    ...props
  };
  return /*#__PURE__*/React.createElement("button", _extends({}, attributes, {
    disabled: progress || disabled
  }), progress && /*#__PURE__*/React.createElement(Spinner, {
    className: "me-2",
    size: "sm"
  }), children);
}

Button.defaultProps = defaultProps;
export default Button;