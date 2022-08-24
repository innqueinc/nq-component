import classNames from "../classNames";
import imageResize from "../../../../imageResize";
import blobToDataUrl from "../../../../blobToDataUrl";
import urlToImage from "../../../../urlToImage";
import canvasToBlob from "../../../../canvasToBlob";
import { saveFileUseCase } from "../../../../domain/file/usecases";
const defaultProps = {
  object: {}
};

function FileUploader({
  className,
  field,
  options,
  object,
  ...props
}) {
  const classes = classNames('form-control', className);
  const value = object[field];

  function onChange(e) {
    const files = e.target.files;

    if (files.length > 0) {
      const file = files[0];
      const maxWidth = 500 || 0;
      const maxHeight = 500 || 0;

      if (maxHeight > 0 && maxHeight > 0) {
        blobToDataUrl(file).then(url => urlToImage(url)).then(image => imageResize(image, maxWidth, maxHeight)).then(canvas => canvasToBlob(canvas, file.type, file.name, file.lastModified)).then(blob => saveFileUseCase().execute(blob)).then(url => {
          object[field] = url;
        }).catch(error => {
          console.log(error);
        });
      }
    }
  }

  return /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: "image/*",
    defaultValue: value,
    className: classes,
    name: field,
    onChange: onChange
  });
}

FileUploader.defaultProps = defaultProps;
export default FileUploader;