import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
const defaultProps = {
  transition: 'fade',
  duration: 600
};

function Transition({
  id,
  transition,
  duration,
  children
}) {
  return /*#__PURE__*/React.createElement(TransitionGroup, {
    component: null,
    childFactory: child => /*#__PURE__*/React.cloneElement(child, {
      classNames: transition,
      timeout: duration
    })
  }, /*#__PURE__*/React.createElement(CSSTransition, {
    timeout: duration,
    key: id
  }, children));
}

Transition.defaultProps = defaultProps;
export default Transition;