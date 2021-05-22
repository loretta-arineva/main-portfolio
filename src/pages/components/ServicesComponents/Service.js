import React from 'react';

const Service = ({children, imgUrl, imgAlt}) => {
    return (
        <div className="service-wrapper">
            <img src={imgUrl} alt={imgAlt} />
            <div className="service-info-wrapper">
                <h3>{children}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    )
}

export default Service;
