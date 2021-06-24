import React from 'react'

const ProgressBar = ({ scroll }) => {
    const width = (scroll * 100).toFixed();
    console.log(width);
    
    return (
        <div className="progress-bar__container">
            <div className="progress-bar" style={{ width: `${width}%` }}></div>
        </div>
    )
}

export default ProgressBar
