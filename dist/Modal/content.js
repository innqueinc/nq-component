import React from 'react';
import Modal from './';
function noop() {}
const defaultProps = {
  positiveButton: 'YES',
  negativeButton: 'CANCEL',
  onPositiveClick: noop,
  onNegativeClick: noop,
  footer: true
};
function ModalContent({
  children,
  isOpen,
  onClosed,
  size,
  positiveButton,
  negativeButton,
  onPositiveClick,
  onNegativeClick,
  footer
}) {
  const [open, setOpen] = React.useState(isOpen);
  React.useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);
  const style = {
    minWidth: '6em'
  };
  return /*#__PURE__*/React.createElement(Modal, {
    isOpen: open,
    onClosed: onClosed,
    size: size
  }, /*#__PURE__*/React.createElement(Modal.Body, {
    className: "pb-0"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "modal-footer border-0 p-4"
  }, /*#__PURE__*/React.createElement("button", {
    style: style,
    onClick: () => {
      setOpen(false);
      onPositiveClick();
    },
    type: "submit",
    className: "btn btn-primary fs-sm"
  }, positiveButton), negativeButton && /*#__PURE__*/React.createElement("button", {
    style: style,
    onClick: () => {
      setOpen(false);
      onNegativeClick();
    },
    type: "button",
    className: "btn btn-light fs-sm ms-2"
  }, negativeButton)));
}
ModalContent.defaultProps = defaultProps;
export default ModalContent;