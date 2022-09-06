import TypeString from "./TypeString";
import TypeDate from "./TypeDate";

function InputType({
  type,
  field,
  onChange
}) {
  switch (type) {
    case 'String':
      return /*#__PURE__*/React.createElement(TypeString, {
        field: field,
        onChange: onChange
      });

    case 'Date':
      return /*#__PURE__*/React.createElement(TypeDate, {
        field: field,
        onChange: onChange
      });

    default:
      return null;
  }
}

export default InputType;