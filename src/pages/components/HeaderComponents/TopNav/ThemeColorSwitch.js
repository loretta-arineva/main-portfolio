import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrow } from '@fortawesome/free-solid-svg-icons';

const ThemeColorSwitch = () => {
    return (
        <div className="color-switch--container">
            <FontAwesomeIcon icon={faCrow} />
        </div>
    )
}

export default ThemeColorSwitch;
