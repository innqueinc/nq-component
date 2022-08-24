import React from 'react';
import classNames from "../classNames";

function noop() {}

const defaultProps = {
  length: 6,
  value: '',
  onChange: noop,
  onComplete: noop
};
const KEY_CODE = {
  backspace: 8,
  left: 37,
  up: 38,
  right: 39,
  down: 40
};

function InputVerification({
  className,
  length,
  value,
  ...props
}) {
  const [values, setValues] = React.useState(value ? value.split('') : Array(length).fill(''));
  const style = {
    maxWidth: 50
  };
  const refs = React.useMemo(() => {
    const refs = [];

    for (let i = 0; i < length; i++) {
      refs.push( /*#__PURE__*/React.createRef());
    }

    return refs;
  }, []);

  function onChange(index, e) {
    e.target.value = e.target.value.replace(/[^\d]/gi, '');

    if (e.target.value === '' || !e.target.validity.valid) {
      return;
    }

    const value = e.target.value;
    let next;

    if (value.length > 1) {
      let nextIndex = value.length + index - 1;

      if (nextIndex >= length) {
        nextIndex = length - 1;
      }

      next = refs[nextIndex];
      const split = value.split('');
      split.forEach((item, i) => {
        const cursor = index + i;

        if (cursor < length) {
          values[cursor] = item;
        }
      });
      setValues([...values]);
    } else {
      next = refs[index + 1];
      values[index] = value;
      setValues([...values]);
    }

    if (next) {
      next.current.focus();
      next.current.select();
    }

    triggerChange(values);
  }

  function onKeyDown(index, e) {
    const prevIndex = index - 1;
    const nextIndex = index + 1;
    const prev = refs[prevIndex];
    const next = refs[nextIndex];

    switch (e.keyCode) {
      case KEY_CODE.backspace:
        e.preventDefault();

        if (values[index]) {
          values[index] = '';
          setValues([...values]);
          triggerChange(values);
        } else if (prev) {
          values[prevIndex] = '';
          prev.current.focus();
          setValues([...values]);
          triggerChange(values);
        }

        break;

      case KEY_CODE.left:
        e.preventDefault();

        if (prev) {
          prev.current.focus();
        }

        break;

      case KEY_CODE.right:
        e.preventDefault();

        if (next) {
          next.current.focus();
        }

        break;

      case KEY_CODE.up:
      case KEY_CODE.down:
        e.preventDefault();
        break;

      default:
    }
  }

  function onFocus(e) {
    e.target.select(e);
  }

  function triggerChange(values) {
    const value = values.join('');
    props.onChange(value);

    if (value.length >= length) {
      props.onComplete(value);
    }
  }

  return /*#__PURE__*/React.createElement("div", {
    className: classNames(className, "d-flex justify-content-center")
  }, values.map((value, index) => {
    return /*#__PURE__*/React.createElement("input", {
      key: index,
      value: value,
      ref: refs[index],
      className: "form-control form-control-lg text-center me-1 p-0",
      type: "tel",
      pattern: "[0-9]*",
      onChange: onChange.bind(this, index),
      onKeyDown: onKeyDown.bind(this, index),
      onFocus: onFocus,
      style: style
    });
  }));
}

InputVerification.defaultProps = defaultProps;
export default InputVerification;