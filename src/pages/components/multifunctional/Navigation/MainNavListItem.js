import React from 'react';
import { NavLink } from 'react-router-dom';

const NavListItem = ({ children, linkUrl, exact }) => {
    return (
        <li><NavLink to={linkUrl} activeClassName='is-active' exact={exact}>{children}</NavLink></li>
    )
}

export default NavListItem;
