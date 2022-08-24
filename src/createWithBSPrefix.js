import React from "react";
import classNames from "./classNames";

const defaultProps = {
    as: "div"
};
export default function createWithBSPrefix(prefix) {
    const BSComponent = React.forwardRef((props, ref) => {
        const {className, as: Tag, ...rest} = props;
        return (
            <Tag
                className={classNames(prefix, className)}
                ref={ref}
                {...rest}
            />
        );
    });
    BSComponent.defaultProps = defaultProps;
    return BSComponent;
}
