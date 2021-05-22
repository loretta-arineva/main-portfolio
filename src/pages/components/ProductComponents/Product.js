import React from 'react';

const Product = ({children, imgUrl, imgAlt}) => {
    return (
        <div className="product-container">
            <img src={imgUrl} alt={imgAlt} />
            <div className="product-title lato-title">{children}</div>
        </div>
    )
}

export default Product;
