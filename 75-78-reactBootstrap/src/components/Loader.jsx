import React from 'react';

const Progress = ({ percentage }) => (
    <div className="progress">
        <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={percentage}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="progressbar"
            style={{ width: `${percentage}%` }}
        />
    </div>
);

export default Progress;