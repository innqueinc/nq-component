class Photo {
    constructor(x, y, width, height, scale = 1) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.scale = scale;
    }

    getWidth() {
        return this.width * this.scale;
    }

    getHeight() {
        return this.height * this.scale;
    }

    setScale(scale) {
        this.scale = scale;
    }
}

export default Photo;
