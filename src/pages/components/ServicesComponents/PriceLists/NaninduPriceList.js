import React from 'react';
import Navigation from '../../multifunctional/Navigation/NavSceleton';
import ServiceListItem from './ServiceListItem';

const NaninduPriceList = () => {
    return (
        <Navigation>
            <ServiceListItem serviceName="Highlights" servicePrice="$59" />
            <ServiceListItem serviceName="Wax(eye brow/lips)" servicePrice="$7" />
            <ServiceListItem serviceName="Shave" servicePrice="$9" />
            <ServiceListItem serviceName="Scalp Massage" servicePrice="$15" />
        </Navigation>
    )
}

export default NaninduPriceList;
