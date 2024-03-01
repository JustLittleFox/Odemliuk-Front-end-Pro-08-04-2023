import React from 'react';

const ListGroup = ({ children }) => (
    <ul className="list-group">
        {React.Children.map(children, (child, i) => (
            <li className="list-group-item" key={i}>
                {child}
            </li>
        ))}
    </ul>
);

export default ListGroup;
