import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';

const ThemeColorSwitch = () => {
    return (
        <div className="color-switch--container">
            <FontAwesomeIcon icon={faCat} />
        </div>
    )
}

export default ThemeColorSwitch;
