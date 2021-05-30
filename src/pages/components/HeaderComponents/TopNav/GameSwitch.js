import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const GameSwitch = () => {
    return (
        <div className="game-switch--container">
            <div className="ct">

            <div id='warped'>
                <span className='w0'>P</span><span className='w1'>L</span><span className='w2'>A</span><span className='w3'>Y</span><span className='w4'> </span><span className='w5'>G</span><span className='w6'>A</span><span className='w7'>M</span><span className='w8'>E</span>
            </div>
            </div>
            <div className="play-btn">
                <FontAwesomeIcon icon={faPlay} />
            </div>
        </div>
    )
}

export default GameSwitch;
