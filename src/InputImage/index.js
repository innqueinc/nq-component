import React from "react";
import classNames from "../classNames";
import canvasToBlob from "../canvasToBlob";
import dialog from "../Modal/dialog";
import ImageCropper from "../ImageCropper";

const defaultProps = {
    object: {},
};

function InputImage({className, field, object, width, height,saveFileUseCase, ...props}) {
    const classes = classNames('form-control', className);
    const imageCropper = React.useRef();
    const value = object[field];

    function showImageCropper(file) {
        dialog.fire({
            html: (
                <ImageCropper
                    border={50}
                    borderRadius={0}
                    ref={imageCropper}
                    className="w-100"
                    src={file}
                    width={width}
                    height={height}
                />
            ),
            positiveButton: 'SAVE',
            onPositiveClick: () => {
                const cropper = imageCropper.current;
                const canvas = cropper.getCrop('image/jpeg');
                canvasToBlob(canvas, file.name)
                    .then(blob => saveFileUseCase().execute(blob))
                    .then(result => {
                        object[field] = result.url;
                    })
                    .catch(error => {
                        console.log(error);
                    });
            },
        });
    }

    function onChange(e) {
        const files = e.target.files;
        if (files.length > 0) {
            const file = files[0];
            showImageCropper(file);
        }
    }

    return (
        <input
            type="file"
            accept="image/*"
            defaultValue={value}
            className={classes}
            name={field}
            onChange={onChange}/>
    )
}

InputImage.defaultProps = defaultProps;

export default InputImage;
