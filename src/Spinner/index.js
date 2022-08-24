import classNames from "../classNames";

function Spinner({className, ...props}) {
    const size = 'spinner-border-' + props.size;
    const classes = classNames("spinner-border text-secondary", size, className)
    return (
        <div className={classes} role="status"/>
    )
}

export default Spinner;
