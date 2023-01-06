import React from "react";
import PropTypes from "prop-types";
import Fade from "../Fade";
import ModalHeader from "./header";
import classNames from "../classNames";
import createWithBSPrefix from "../createWithBSPrefix";

const propTypes = {
    size: PropTypes.oneOf(["sm", "lg", "xl"]),
}

function noop() {
}

const defaultProps = {
    isOpen: false,
    onClosed: noop,
}

function Modal({children, isOpen, className, ...props}) {
    const [open, setOpen] = React.useState(isOpen);
    const [isFade, setFade] = React.useState(isOpen);
    React.useEffect(() => {
        isOpen && setOpen(isOpen);
        setFade(isOpen);
        isOpen && document.body.classList.add('modal-open');
    }, [isOpen])

    function renderModal() {
        const dialogBaseClass = "modal-dialog modal-dialog-centered";
        const size = "modal-" + props.size;
        const classes = classNames(dialogBaseClass, size);
        return (
            <div className={classes}>
                <div className="modal-content">
                    {children}
                </div>
            </div>
        );
    }

    function onClosed(node) {
        props.onClosed(node);
        setOpen(isOpen);
        document.body.classList.remove('modal-open');
    }

    if (!open) return null;
    return (
        <>
            <Fade
                in={isFade}
                className={classNames("modal d-block", className)}
                onExited={onClosed}>
                {renderModal()}
            </Fade>
            <Fade
                in={isFade}
                className="modal-backdrop"/>
        </>
    );
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
Modal.Header = ModalHeader;
Modal.Body = createWithBSPrefix("modal-body");
Modal.Footer = createWithBSPrefix("modal-footer");
export default Modal;
