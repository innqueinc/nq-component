import classNames from "../classNames";
const defaultProps = {
  background: 'white',
  padding: '2'
};

function Card({
  className,
  background,
  children
}) {
  const classes = classNames(className, "shadow-sm rounded", `bg-${background}`);
  return /*#__PURE__*/React.createElement("div", {
    className: classes
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-3 px-lg-5 py-lg-4"
  }, children));
}

Card.defaultProps = defaultProps;
export default Card;