function ProgressNavigation() {
  return /*#__PURE__*/React.createElement("div", {
    className: "position-relative m-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress",
    style: {
      "height": "2px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress-bar bg-dark",
    role: "progressbar",
    style: {
      "width": "50%"
    },
    "aria-valuenow": "50",
    "aria-valuemin": "0",
    "aria-valuemax": "100"
  })), /*#__PURE__*/React.createElement("span", {
    className: "badge bg-dark position-absolute top-0 translate-middle"
  }, "1"), /*#__PURE__*/React.createElement("span", {
    className: "badge bg-dark position-absolute top-0 translate-middle start-50"
  }, "2"), /*#__PURE__*/React.createElement("span", {
    className: "badge bg-white text-dark position-absolute top-0 translate-middle start-100"
  }, "3"));
}
export default ProgressNavigation;