import React from 'react';
import classNames from "../classNames";
import getValue from "../getValue";

function ButtonGroup() {
  const [active, setActive] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    className: "btn-group mt-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setActive(0),
    type: "button",
    className: classNames('btn', getValue(active === 0, 'btn-primary active', 'btn-light'))
  }, "Bill monthly"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setActive(1),
    type: "button",
    className: classNames('btn', getValue(active === 1, 'btn-primary active', 'btn-light'))
  }, "Bill yearly"));
}

export default ButtonGroup;