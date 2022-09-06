import TypeString from "./TypeString";
import TypeDate from "./TypeDate";

function InputType({type, field, onChange}) {
    switch (type) {
        case 'String':
            return <TypeString
                field={field}
                onChange={onChange}/>
        case 'Date':
            return <TypeDate
                field={field}
                onChange={onChange}/>
        default:
            return null;
    }
}

export default InputType;
