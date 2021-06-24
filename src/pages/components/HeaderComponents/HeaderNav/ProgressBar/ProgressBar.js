import React from 'react'

const ProgressBar = ({ scroll }) => {
    const width = (scroll * 100).toFixed();
    
    return (
        <div className="progress-bar__container">
            <div className="progress-bar" style={{ width: `${width}%` }}></div>
        </div>
    )
}

export default ProgressBar
