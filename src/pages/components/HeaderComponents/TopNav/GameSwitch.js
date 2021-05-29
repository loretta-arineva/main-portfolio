import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const GameSwitch = () => {
    return (
        <div className="game-switch--container">
            <div className="game--btn-text">
                <span className="l1">P</span>
                <span className="l2">L</span>
                <span className="l3">A</span>
                <span className="l4">Y</span>
                <span className="l5"></span>
                <span className="l6">G</span>
                <span className="l7">A</span>
                <span className="l8">M</span>
                <span className="l9">E</span>
            </div>
            <div className="play-btn">
                <FontAwesomeIcon icon={faPlay}/>
            </div>
        </div>
    )
}

export default GameSwitch;
