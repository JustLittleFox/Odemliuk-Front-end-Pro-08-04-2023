import React, { useState } from 'react';
import classNames from 'classnames';

const BtnGroup = () => {
    const [active, setActive] = useState(null);

    const handleClick = (btn) => {
        setActive(btn);
    };

    return (
        <div className="btn-group" role="group">
            <button
                type="button"
                className={classNames('btn', { 'btn-primary': active === 'btn1', 'btn-secondary': active !== 'btn1' })}
                onClick={() => handleClick('btn1')}
            >
                Button 1
            </button>
            <button
                type="button"
                className={classNames('btn', { 'btn-primary': active === 'btn2', 'btn-secondary': active !== 'btn2' })}
                onClick={() => handleClick('btn2')}
            >
                Button 2
            </button>
        </div>
    );
};

export default BtnGroup;
