import React from "react";
import PointerHandler from "../PointerHandler";
import Cropper from "./Cropper";
import urlToImage from "./urlToImage";
import blobToDataUrl from "./blobToDataUrl";
import drawImage from "./drawImage";
import drawClip from "./drawClip";
import getDistance from "./getDistance";

const defaultProps = {
    width: 500,
    height: 500,
    border: 50,
    borderRadius: 50,
    scale: 1,
    rotate: 0,
};

class ImageCropperControl extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        const border = props.border * 2;
        this.cropper = new Cropper(props.width + border, props.height + border);
    }

    componentDidMount() {
        if (this.props.src) {
            this.loadImage(this.props.src);
        }
        const canvas = this.ref.current;
        this.pointer = new PointerHandler(canvas, this.handleEvent.bind(this));
    }

    componentDidUpdate(prevProps, prevState) {
        const oldScale = prevProps.scale;
        const newScale = this.props.scale;
        if (oldScale !== newScale) {
            this.cropper.photo.setScale(newScale);
            this.draw();
        }
    }

    loadImage(src) {
        if (typeof src === "string") {
            urlToImage(src, "anonymous")
                .then(image => {
                    this.handleImageReady(image);
                });
        } else if (src instanceof File) {
            blobToDataUrl(src)
                .then((url) => {
                    this.loadImage(url);
                });
        }
    }

    handleImageReady(image) {
        this.image = image;
        this.cropper.setCLip(this.props.width, this.props.height);
        this.cropper.setPhoto(this.image.width, this.image.height, this.props.scale);
        this.draw();
    }

    handleEvent() {
        const events = this.pointer.getEvents();
        if (events.length === 1) {
            const event = events[0];
            switch (event.type) {
                case 'pointerdown':
                    this.lastDistance = null;
                    this.lastX = event.x;
                    this.lastY = event.y;
                    break;
                case 'pointermove':
                    if (this.lastDistance) return;
                    const deltaX = event.x - this.lastX;
                    const deltaY = event.y - this.lastY;
                    this.lastX = event.x;
                    this.lastY = event.y;
                    // get how many percent change from the size of canvas
                    const normalX = deltaX / this.cropper.width;
                    const normalY = deltaY / this.cropper.height;
                    // convert the percent to the actual width of photo
                    const addedX = this.cropper.photo.getWidth() * normalX;
                    const addedY = this.cropper.photo.getHeight() * normalY;
                    // add the changes to the current position of photo
                    const x = this.cropper.photo.x + addedX;
                    const y = this.cropper.photo.y + addedY;
                    this.cropper.movePhoto(x, y);
                    this.draw();
                    break;
                default:
            }
        } else if (events.length === 2) {
            const zoom = this.getZoom(events);
            if (zoom) {
                const currentScale = this.cropper.photo.scale + zoom / 100;
                this.cropper.scalePhoto(currentScale);
                this.draw();
            }
        }
    }

    getZoom(events) {
        let zoom = false;
        const currentDistance = getDistance(events[0].x, events[0].y, events[1].x, events[1].y);
        if (this.lastDistance) {
            const distance = currentDistance - this.lastDistance;
            zoom = distance;
        }
        this.lastDistance = currentDistance;
        return zoom;
    }

    draw() {
        requestAnimationFrame(this.drawFrame.bind(this));
    }

    drawFrame() {
        const canvas = this.ref.current;
        const width = canvas.width;
        const height = canvas.height;
        const c = canvas.getContext('2d');
        // clear canvas
        c.clearRect(0, 0, width, height);
        // start drawing
        drawImage(c, this.image, this.cropper);
        drawClip(c, this.cropper, this.props.borderRadius);
        this.getCrop();
    }


    getCrop(fileType) {
        const canvas = document.createElement('canvas');
        canvas.width = this.cropper.clip.width;
        canvas.height = this.cropper.clip.height;
        const ctx = canvas.getContext('2d');
        if (fileType === 'image/jpeg') {
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        if (this.image) {
            const x = this.cropper.photo.x - this.props.border;
            const y = this.cropper.photo.y - this.props.border;
            const width = this.cropper.photo.getWidth();
            const height = this.cropper.photo.getHeight();
            ctx.drawImage(this.image, x, y, width, height);
        }
        return canvas;
    }

    render() {
        const defaultStyle = {
            cursor: "move",
            touchAction: 'none',
            userSelect: 'none'
        }
        const attributes = {
            className: this.props.className,
            width: this.cropper.width,
            height: this.cropper.height,
            style: {
                ...defaultStyle,
            },
        }
        return (
            <canvas ref={this.ref}  {...attributes}></canvas>
        );
    }


}

ImageCropperControl.defaultProps = defaultProps;
export default ImageCropperControl;
