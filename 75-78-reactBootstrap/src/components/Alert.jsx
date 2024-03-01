import React from "react";

const Alert = ({ text, type }) => (
    <div className={`alert alert-${type}`} role="alert">
        {text}
    </div>
)

export default Alert;