import Fade from "../Fade";
import Portal from "../Portal";
import React from "react";
function Backdrop(props) {
  const [isOpen, setOpen] = React.useState(props.isOpen);
  const element = React.useMemo(() => {
    const element = document.createElement('div');
    document.body.appendChild(element);
    return element;
  }, []);
  function onClosed(node) {
    props.onClosed(node);
    setOpen(props.isOpen);
  }

  // if (!isOpen) return null;
  return /*#__PURE__*/React.createElement(Portal, {
    node: element
  }, /*#__PURE__*/React.createElement(Fade, {
    in: isOpen,
    onExited: onClosed,
    className: "modal-backdrop"
  }));
}
export default Backdrop;