import classNames from "../classNames";

const defaultProps = {
    object: {},
    type: 'tel',
};

function InputNumber({className, name, options, object, ...props}) {
    function onInput(e) {
        e.target.value = e.target.value.replace(/[^\d]/gi, '');
        if (e.target.value === '' || !e.target.validity.valid) {
            return;
        }
        object[name] = parseInt(e.target.value);
    }
    const value = object[name];
    return (
        <input
            className={classNames('form-control', className)}
            defaultValue={value}
            name={name}
            onInput={onInput}
            {...props}/>
    )
}

InputNumber.defaultProps = defaultProps;

export default InputNumber;
