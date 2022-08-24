function IconItem({data, innerRef, innerProps}) {
    return (
        <div className="react-select p-2 pl-3 cursor-pointer" ref={innerRef} {...innerProps}>
            <i className={data.value}></i>
            <span className="ms-2">{data.label}</span>
        </div>
    );
}

export default IconItem;
