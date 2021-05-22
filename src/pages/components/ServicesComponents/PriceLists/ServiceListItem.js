import React from 'react';

const ServiceListItem = ({serviceName, servicePrice}) => {
    return (
        <li class="list-item">
            <div class="service">
                <div class="service-type">
                    {serviceName}
                </div>
                <div class="service-price">
                    {servicePrice}
                </div>
            </div>
        </li>
    )
}

export default ServiceListItem;
