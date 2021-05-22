import React from 'react';
import Navigation from '../../multifunctional/Navigation/NavSceleton';
import ServiceListItem from './ServiceListItem';

const TakiataPriceList = () => {
    return (
        <Navigation>
            <ServiceListItem serviceName="Short hair cut" servicePrice="$18" />
            <ServiceListItem serviceName="Long hair cut" servicePrice="$22" />
            <ServiceListItem serviceName="Color" servicePrice="$9" />
            <ServiceListItem serviceName="Beard trim" servicePrice="$15" />
        </Navigation>
    )
}

export default TakiataPriceList;
