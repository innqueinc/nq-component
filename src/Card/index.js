import classNames from "../classNames";

const defaultProps = {
    background: 'white',
    padding: '2'
}

function Card({className, background, children}) {
    const classes = classNames(
        className,
        "shadow-sm rounded",
        `bg-${background}`,
    );
    return (
        <div className={classes}>
            <div className="p-3 px-lg-5 py-lg-4">
                {children}
            </div>
        </div>
    )
}

Card.defaultProps = defaultProps;
export default Card;
