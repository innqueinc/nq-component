function roundedRect(context, x, y, width, height, radius) {
    if (radius === 0) {
        context.rect(x, y, width, height)
    } else {
        const widthMinusRad = width - radius
        const heightMinusRad = height - radius
        context.arc(
            x + radius,
            y + radius,
            radius,
            Math.PI,
            Math.PI * 1.5,
        )
        context.arc(
            x + widthMinusRad,
            y + radius,
            radius,
            Math.PI * 1.5,
            Math.PI * 2,
        )
        context.arc(
            x + widthMinusRad,
            y + heightMinusRad,
            radius,
            Math.PI * 2,
            Math.PI * 0.5,
        )
        context.arc(
            x + radius,
            y + heightMinusRad,
            radius,
            Math.PI * 0.5,
            Math.PI,
        )
    }
}

export default roundedRect;
