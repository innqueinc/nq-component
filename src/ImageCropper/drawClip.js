import roundedRect from "./roundedRect";

function drawClip(c, cropper, borderRadius) {
    c.beginPath();
    const x = cropper.clip.x;
    const y = cropper.clip.y;
    const width = cropper.clip.width;
    const height = cropper.clip.height;
    roundedRect(c, x, y, width, height, borderRadius);
    //backdrop
    c.fillStyle = 'rgba(0,0,0,0.5)';
    c.rect(cropper.width, 0, -cropper.width, cropper.height);
    c.fill();
}

export default drawClip;
