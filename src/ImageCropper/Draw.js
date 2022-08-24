import React from "react";
import Cropper from "./Cropper";
import urlToImage from "../../urlToImage";
import blobToDataUrl from "../../blobToDataUrl";
import getDistance from "../../getDistance";
import PointerHandler from "../../PointerHandler";
import drawPhoto from "./drawPhoto";
import drawClip from "./drawClip";

function noop() {

}

const defaultProps = {
    width: 500,
    height: 500,
    border: 50,
    borderRadius: 50,
    scale: 1,
    rotate: 0,
    onReady: noop,
};
let image;
let pointer;
let lastDistance;

function ImageCropperControl(props) {
    const ref = React.useRef();
    const cropper = React.useMemo(() => {
        const border = props.border * 2;
        props.onReady(ref);
        return new Cropper(props.width + border, props.height + border);
    }, []);
    const defaultStyle = {
        cursor: "move",
        touchAction: 'none',
        userSelect: 'none'
    }
    const attributes = {
        className: props.className,
        width: cropper.width,
        height: cropper.height,
        style: {
            ...defaultStyle,
        },
    }
    React.useEffect(() => {
        loadImage(props.src);
    }, props.src);

    function loadImage(src) {
        if (typeof src === "string") {
            urlToImage(src, "anonymous")
                .then(image => {
                    handleImageReady(image);
                });
        } else if (src instanceof File) {
            blobToDataUrl(src)
                .then((url) => loadImage(url));
        }
    }

    function handleImageReady(img) {
        image = img;
        cropper.setCLip(props.width, props.height);
        cropper.setPhoto(image.width, image.height, props.scale);
        const canvas = ref.current;
        pointer = new PointerHandler(canvas, handleEvent);
        draw();
    }

    function handleEvent() {
        const events = pointer.getEvents();
        if (events.length === 1) {
            const event = events[0];
            switch (event.type) {
                case 'pointerdown':
                    lastDistance = null;
                    cropper.photo.offset.x = event.x - cropper.photo.x;
                    cropper.photo.offset.y = event.y - cropper.photo.y;
                    break;
                case 'pointermove':
                    if (lastDistance) return;
                    cropper.movePhoto(event.x, event.y);
                    draw();
                    break;
            }
        } else if (events.length === 2) {
            const zoom = getZoom(events);
            if (zoom) {
                const currentScale = cropper.photo.getScale() + zoom / 100;
                cropper.scalePhoto(currentScale);
                draw();
            }
        }
    }

    function getZoom(events) {
        let zoom = false;
        const currentDistance = getDistance(events[0].x, events[0].y, events[1].x, events[1].y);
        if (lastDistance) {
            const distance = currentDistance - lastDistance;
            zoom = distance;
        }
        lastDistance = currentDistance;
        return zoom;
    }

    function draw() {
        const canvas = ref.current;
        const width = canvas.width;
        const height = canvas.height;
        const c = canvas.getContext('2d');
        // clear canvas
        c.clearRect(0, 0, width, height);
        // start drawing
        drawPhoto(c, image, cropper);
        drawClip(c, cropper, props.borderRadius);
    }


    return (
        <canvas ref={ref}  {...attributes}></canvas>
    );
}

ImageCropperControl.defaultProps = defaultProps;
export default ImageCropperControl;
