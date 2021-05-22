import React from 'react';

const PriceCard = ({ cardTitle, dayFrom, dayTo, children }) => {
    return (
        <div className="price-card">
            <h3>{cardTitle}</h3>
            <div className="separator"></div>
            <div className="week-days">{dayFrom} <span>&#8211;</span> {dayTo}</div>
            {children}
        </div>
    )
}

export default PriceCard;
