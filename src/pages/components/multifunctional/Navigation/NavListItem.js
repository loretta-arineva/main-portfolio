import React from 'react';
import { Link } from 'react-router-dom';

const NavListItem = ({ children, linkUrl }) => {
    return (
        <li><Link to={linkUrl}>{children}</Link></li>
    )
}

export default NavListItem;
