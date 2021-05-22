import React from 'react';

const NavSceleton = ({children, classList}) => {
    return (
        <nav className={classList}>
            <ul>
                {children}
            </ul>
        </nav>
    )
}

export default NavSceleton;
