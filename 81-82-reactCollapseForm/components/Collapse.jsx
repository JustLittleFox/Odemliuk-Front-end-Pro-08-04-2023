import React, { useState } from 'react';

const Collapse = ({ text, opened = true }) => {
    const [isOpen, setIsOpen] = useState(opened);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <a href="#" onClick={toggleOpen} className="btn btn-primary">
                {isOpen ? 'Hide' : 'Show'}
            </a>
            <div className={`collapse ${isOpen ? 'show' : ''}`} aria-expanded={isOpen}>
                <div className='card card-body'>
                    {text}
                </div>
            </div>
        </div>
    );
};

export default Collapse;
