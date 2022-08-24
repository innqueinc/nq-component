import React from "react";
import PointerHandler from "../PointerHandler";
import Layout from "../Layout";
import hasTouch from "../hasTouch";
import {useLocation} from 'react-router-dom';

let lastX;
let pointer;
const defaultProps = {}

function OffCanvas({children, signOutClick}) {
    const ref = React.useRef();
    const {collapsed, setCollapse} = React.useContext(Layout.Context);
    const location = useLocation();
    React.useEffect(() => {
        setCollapse(true);
    }, [location, setCollapse])

    const handleEvent = React.useCallback(() => {
        const events = pointer.getEvents();
        const event = events[0];
        const offcanvas = ref.current;
        const width = offcanvas.clientWidth;
        const x = event.x;
        const rect = offcanvas.getBoundingClientRect();
        switch (event.type) {
            case 'pointerdown':
                offcanvas.style.transition = 'transform 0s ease-in-out';
                lastX = x;
                break;
            case 'pointermove':
                const deltaX = x - lastX;
                lastX = x;
                const move = rect.left + deltaX;
                if (move <= 0) {
                    offcanvas.style.transform = `translateX(${move}px)`;
                }
                break;
            case 'pointerup':
                offcanvas.style = null;
                setCollapse(rect.left < -width / 3);
                break;
            default:
        }
    }, [setCollapse])

    React.useEffect(() => {
        const offcanvas = ref.current;
        if (hasTouch) {
            pointer = new PointerHandler(offcanvas, handleEvent);
        }
    }, [handleEvent])
    React.useEffect(() => {
        const offcanvas = ref.current;
        offcanvas.classList[collapsed ? 'remove' : 'add']('show');
    }, [collapsed]);

    return (
        <>
            <div
                ref={ref}
                className="offcanvas offcanvas-start sidebar-nav bg-dark visible"
                data-bs-backdrop="true"
                data-bs-scroll="false"
                id="offcanvas">
                <div className="offcanvas-body">
                    {children}
                </div>
                <div className="my-2">
                    <button
                        className="nav-link text-muted btn btn-link"
                        onClick={signOutClick}>
                        <i className="bi bi-power"></i>
                        <span className="ms-2 fw-bold small">Log out</span>
                    </button>
                </div>
            </div>
            {/*<Backdrop isOpen={true}/>*/}
        </>

    )
}

OffCanvas.defaultProps = defaultProps;
export default OffCanvas;
