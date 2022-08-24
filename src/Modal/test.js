import React from "react";
import ModalContent from "./content";

class TestModal extends React.Component {
    state = {isOpen: false}

    toggle() {
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        return (
            <div>
                <ModalContent
                    isOpen={this.state.isOpen}
                    onClosed={this.toggle.bind(this)}/>
                <button onClick={this.toggle.bind(this)}>show modal</button>
            </div>
        );
    }
}

export default TestModal;
