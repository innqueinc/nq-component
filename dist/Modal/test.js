import React from "react";
import ModalContent from "./content";

class TestModal extends React.Component {
  state = {
    isOpen: false
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ModalContent, {
      isOpen: this.state.isOpen,
      onClosed: this.toggle.bind(this)
    }), /*#__PURE__*/React.createElement("button", {
      onClick: this.toggle.bind(this)
    }, "show modal"));
  }

}

export default TestModal;