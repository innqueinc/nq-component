import Photo from './Photo';
import Clip from './Clip';

class Cropper {
    constructor(width, height) {
        // view port dimension
        this.width = width;
        this.height = height;
    }

    setPhoto(width, height, scale) {
        // assign the new width and height
        let newHeight = this.clip.height;
        let newWidth = this.clip.width;
        // calculate ratio
        const clipRatio = this.clip.width / this.clip.height;
        const photoRatio = width / height;
        // adjust size base on ratio
        if (clipRatio > photoRatio) {
            newHeight = height * (newWidth / width);
        } else {
            newWidth = width * (newHeight / height);
        }
        // center
        const x = (this.width - newWidth) * .5;
        const y = (this.height - newHeight) * .5;
        this.photo = new Photo(x, y, newWidth, newHeight, scale);
    }

    setCLip(width, height) {
        const x = (this.width / 2) - (width / 2);
        const y = (this.height / 2) - (height / 2);
        this.clip = new Clip(x, y, width, height);
    }

    movePhoto(x, y) {
        this.photo.x = x;
        this.photo.y = y;
        // set limit
        this.positionPhoto();
    }

    scalePhoto(scale) {
        const lastWidth = this.photo.getWidth();
        const lastHeight = this.photo.getHeight();
        const currentWidth = this.photo.width * scale;
        const currentHeight = this.photo.height * scale;
        // minimum size
        if (currentWidth < this.clip.width) return;
        if (currentHeight < this.clip.height) return;
        const deltaWidth = currentWidth - lastWidth;
        const deltaHeight = currentHeight - lastHeight;
        let x = this.photo.x - deltaWidth / 2;
        let y = this.photo.y - deltaHeight / 2;
        this.photo.setScale(scale);
        this.photo.x = x;
        this.photo.y = y;
        this.positionPhoto();
    }

    positionPhoto() {
        if (this.photo.x >= this.clip.x) {// left
            this.photo.x = this.clip.x;
        }
        if (this.photo.x + this.photo.getWidth() <= this.clip.x + this.clip.width) {// right
            this.photo.x = this.clip.x + this.clip.width - this.photo.getWidth();
        }
        if (this.photo.y >= this.clip.y) {// top
            this.photo.y = this.clip.y;
        }
        if (this.photo.y + this.photo.getHeight() <= this.clip.y + this.clip.height) {// down
            this.photo.y = this.clip.y + this.clip.height - this.photo.getHeight();
        }
    }
}

export default Cropper;
