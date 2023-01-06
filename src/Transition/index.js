import React from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const defaultProps = {
    transition: 'fade',
    duration: 600,
}

function Transition({id, transition, duration, children}) {
    return (
        <TransitionGroup
            component={null}
            childFactory={child => React.cloneElement(child, {classNames: transition, timeout: duration})}>
            <CSSTransition
                timeout={duration}
                key={id}>
                {children}
            </CSSTransition>
        </TransitionGroup>
    )
}

Transition.defaultProps = defaultProps;
export default Transition;
