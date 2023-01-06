import React from 'react';
import classNames from "../classNames";
import getValue from "../getValue";

function ButtonGroup() {
    const [active, setActive] = React.useState(0);
    return (
        <div className="btn-group mt-3">
            <button
                onClick={()=>setActive(0)}
                type="button"
                    className={classNames('btn', getValue(active === 0, 'btn-primary active', 'btn-light'))}>Bill monthly</button>
            <button
                onClick={()=>setActive(1)}
                type="button" className={classNames('btn', getValue(active === 1, 'btn-primary active', 'btn-light'))}>Bill yearly</button>
        </div>
    )
}

export default ButtonGroup;
