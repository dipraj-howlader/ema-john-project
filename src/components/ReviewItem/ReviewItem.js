import React from 'react';

const ReviewItem = (props) => {
    const reviewItemStyle ={borderBottom: '1px solid lightgray',
    marginBottom: '5px',
    paddingBottom:'5px',
    marginLeft:'20px'
}

    // console.log(props);
    const {name,quantity,key,price} = props.product;
    return (
        <div style={reviewItemStyle} className="review-item">
            <h4 className="product-name">{name}</h4>
            <p>Quantity : {quantity}</p>
            <p><small>${price}</small></p>
            <button className="main-button" onClick={() => props.handleRemoveProduct(key)}>Remove</button>
        </div>
    );
};

export default ReviewItem;