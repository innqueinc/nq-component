function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from "react";
import classNames from "../classNames";
const defaultProps = {
  show: false,
  touchHandleWidth: 20,
  dragToggleDistance: 30,
  onSetShow: () => {},
  styles: {},
  defaultSidebarWidth: 0
};
const defaultStyles = {
  sidebar: {},
  overlay: {
    zIndex: 1,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    visibility: "hidden",
    transition: "opacity .3s ease-out, visibility .3s ease-out",
    backgroundColor: "rgba(0,0,0,.3)"
  },
  dragHandle: {
    zIndex: 2,
    position: "fixed",
    top: 0,
    bottom: 0
  }
};
const CANCEL_DISTANCE_ON_SCROLL = 20;
class OffCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarWidth: props.defaultSidebarWidth,
      touchIdentifier: null,
      touchStartX: null,
      touchCurrentX: null,
      dragSupported: false
    };
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }
  componentDidMount() {
    const isIos = /iPad|iPhone|iPod/.test(navigator ? navigator.userAgent : "");
    this.setState({
      dragSupported: typeof window === "object" && "ontouchstart" in window && !isIos
    });
    this.saveSidebarWidth();
  }
  componentDidUpdate() {
    if (!this.isTouching()) {
      this.saveSidebarWidth();
    }
  }
  onTouchStart(event) {
    if (!this.isTouching()) {
      const touch = event.targetTouches[0];
      this.setState({
        touchIdentifier: touch.identifier,
        touchStartX: touch.clientX,
        touchCurrentX: touch.clientX
      });
    }
  }
  onTouchMove(event) {
    if (this.isTouching()) {
      const touch = event.targetTouches[0];
      this.setState({
        touchCurrentX: touch.clientX
      });
    }
  }
  onTouchEnd() {
    if (this.isTouching()) {
      // trigger a change to show if sidebar has been dragged beyond dragToggleDistance
      const percentage = this.getMovePercent();
      if (this.props.show && percentage < 100 - this.props.dragToggleDistance || !this.props.show && percentage > this.props.dragToggleDistance) {
        this.props.onSetShow(!this.props.show);
      }
      this.setState({
        touchIdentifier: null,
        touchStartX: null,
        touchCurrentX: null
      });
    }
  }
  onScroll() {
    if (this.isTouching() && this.inCancelDistanceOnScroll()) {
      this.setState({
        touchIdentifier: null,
        touchStartX: null,
        touchCurrentX: null
      });
    }
  }

  // True if the on going gesture X distance is less than the cancel distance
  inCancelDistanceOnScroll() {
    return Math.abs(this.state.touchStartX - this.state.touchCurrentX) < CANCEL_DISTANCE_ON_SCROLL;
  }
  isTouching() {
    return this.state.touchIdentifier !== null;
  }
  overlayClicked() {
    if (this.props.show) {
      this.props.onSetShow(false);
    }
  }
  saveSidebarWidth() {
    // set width if not equal to last
    const width = this.sidebar.offsetWidth;
    if (width !== this.state.sidebarWidth) {
      this.setState({
        sidebarWidth: width
      });
    }
  }
  setSidebarRef(node) {
    this.sidebar = node;
  }
  getMovePercent() {
    const start = this.state.touchStartX;
    const width = this.state.sidebarWidth;
    const current = this.state.touchCurrentX;
    // if already show calculate the distance they moved
    // other wise it will moved from the the edge of the sidebar
    if (this.props.show) {
      const delta = current - start; // delta touch
      const percent = (delta + width) / width;
      return percent * 100;
    }
    return Math.min(current / width * 100, 100);
  }
  render() {
    let dragHandle;
    const dragHandleStyle = {
      ...defaultStyles.dragHandle,
      ...this.props.styles.dragHandle
    };
    const sidebarStyle = {
      ...defaultStyles.sidebar
    };
    const overlayStyle = {
      ...defaultStyles.overlay,
      ...this.props.styles.overlay
    };
    const useTouch = this.state.dragSupported;
    dragHandleStyle.width = this.props.touchHandleWidth;
    const sidebarProps = {};
    if (useTouch) {
      if (this.props.show) {
        sidebarProps.onTouchStart = this.onTouchStart;
        sidebarProps.onTouchMove = this.onTouchMove;
        sidebarProps.onTouchEnd = this.onTouchEnd;
        sidebarProps.onTouchCancel = this.onTouchEnd;
        sidebarProps.onScroll = this.onScroll;
        overlayStyle.opacity = 1;
        overlayStyle.visibility = "visible";
      } else {
        dragHandle = /*#__PURE__*/React.createElement("div", {
          style: dragHandleStyle,
          onTouchStart: this.onTouchStart,
          onTouchMove: this.onTouchMove,
          onTouchEnd: this.onTouchEnd,
          onTouchCancel: this.onTouchEnd
        });
      }
    }
    const classes = classNames('offcanvas offcanvas-start sidebar-nav bg-dark visible', this.props.show ? 'show' : '');
    const isTouching = this.isTouching();
    if (isTouching) {
      const percentage = this.getMovePercent();
      // translate from -100 to -0
      const translate = 100 - percentage;
      // slide show to what we dragged
      sidebarStyle.transform = `translateX(-${translate}%)`;
      sidebarStyle.WebkitTransform = `translateX(-${translate}%)`;
      // remove the transition when touching
      sidebarStyle.transition = 'transform 0s ease-in-out';
      // add backdrop
      overlayStyle.opacity = percentage / 100;
      overlayStyle.visibility = "visible";
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", _extends({}, sidebarProps, {
      className: classes,
      style: sidebarStyle,
      ref: this.setSidebarRef.bind(this),
      "data-bs-backdrop": "true",
      "data-bs-scroll": "false",
      id: "offcanvas"
    }), this.props.children), dragHandle, /*#__PURE__*/React.createElement("div", {
      style: overlayStyle,
      onClick: this.overlayClicked
    }));
  }
}
OffCanvas.defaultProps = defaultProps;
export default OffCanvas;