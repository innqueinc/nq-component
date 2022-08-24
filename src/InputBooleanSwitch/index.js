import Switch from "../Switch";

function InputBooleanSwitch({className, name, object, id}) {
    function onChange(checked) {
        object[name] = checked;
    }
    const value = object[name];
    return (
        <Switch
            className={className}
            onChange={onChange}
            checked={value}
            label={name}
            id={id}
        />
    )
}

export default InputBooleanSwitch;
