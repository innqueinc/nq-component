function OutputBoolean({
  field,
  options,
  object
}) {
  const value = object[field];

  if (value) {
    return "true";
  } else {
    return "false";
  }
}

export default OutputBoolean;