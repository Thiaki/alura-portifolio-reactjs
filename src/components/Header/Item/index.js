import React from 'react';
import { NavLink } from 'react-router-dom';

const Item = (props) => {
    return (
        <li>
            <NavLink to={props.link}>{props.children}</NavLink>
        </li>
    )
}

export default Item
