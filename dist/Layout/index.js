import React from "react";
const Context = /*#__PURE__*/React.createContext({});
function Layout({
  children,
  ...props
}) {
  const [collapsed, setCollapse] = React.useState(true);
  function getValue() {
    return {
      collapsed,
      setCollapse
    };
  }
  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: getValue()
  }, children);
}
Layout.Context = Context;
export default Layout;