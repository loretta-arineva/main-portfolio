import React from 'react';
import { Link } from 'react-router-dom';

const NextPage = ({children, sub, linkUrl}) => {
    return (
        <Link className="next-page" to={linkUrl}>
            <h3 className="np-title">{children}</h3>
            <p className="np-subtitle">{sub}</p>
        </Link>
    )
}

export default NextPage;
