function drawImage(c, image, cropper) {
    const x = cropper.photo.x;
    const y = cropper.photo.y;
    const width = cropper.photo.getWidth();
    const height = cropper.photo.getHeight();
    c.drawImage(image, x, y, width, height);
}

export default drawImage;
