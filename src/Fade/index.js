import React from "react";
import {Transition} from 'react-transition-group';
import classNames from "../classNames";

const defaultProps = {
    as: "div",
    baseClass: "fade",
    timeout: 150,
    appear: true,
    baseClassActive: "show",
}

const Fade = React.forwardRef(({as: Comp, className, baseClass, baseClassActive, children, style, ...rest}, ref) => {
    return (
        <Transition {...rest}>
            {status => {
                const isActive = status === "entered";
                const classes = classNames(className, baseClass, isActive && baseClassActive);
                return (
                    <Comp className={classes} ref={ref} style={style}>
                        {children}
                    </Comp>
                )
            }}
        </Transition>
    );
});

Fade.defaultProps = defaultProps;
export default Fade;
