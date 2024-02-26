import React from "react";

const Card2 = ({ title, text }) => (
    <div className="card">
        <div className="card-body">
            {title && <h4 className="card-title">{title}</h4>}
            {text && <p className="card-text">{text}</p>}
        </div>
    </div>
);

export default Card2;