import React from 'react';
import bird from '../../../assets/images/bird.png';
const Afterword = () => {
    return (
        <div className="afterword">
            <div className="afterword-wrapper">
                <div className="footer-logo">
                    <img src={bird} alt="" />
                </div>
                <div className="thanks">
                    <p>Thanks for scrolling all this way!</p>
                    <p className="signature">l.krasteva</p>
                </div>
            </div>
        </div>
    )
}

export default Afterword;
