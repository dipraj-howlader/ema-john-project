import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import HappyImage from '../../images/giphy.gif';

const Review = () => {

    const [cart , setCart] = useState([]);
    const [orderPlace, setOrderPlace] = useState(false)
    const handlePlaceOrder = () =>{
        setCart([]);
        setOrderPlace(true);
        processOrder();

    }


        const handleRemoveProduct = (productKey) =>{
            // console.log("Removed Clicked", productKey);
            const newCart = cart.filter(pd => pd.key !== productKey);
            setCart(newCart);
            removeFromDatabaseCart(productKey);
        }

    useEffect(() => {
        //cart
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);

       const cartProducts = productKeys.map(key =>{
           const product = fakeData.find(pd => pd.key === key);
           product.quantity = saveCart[key];
           return product;
       });
        // console.log(cartProducts);
        setCart(cartProducts );
    }, []);


    let thankyou;
    if(orderPlace) {
    thankyou = <img src={HappyImage} alt=""/>
}
    return (
        <div className="twin-container">
            <div>
            {
                cart.map(pd => <ReviewItem product={pd} handleRemoveProduct={handleRemoveProduct} 
                     key={pd.key}></ReviewItem>)
            }
            </div>
            {thankyou}
            <div className="cart-container">
            <Cart cart={cart}>
                <button className="main-button" onClick={handlePlaceOrder}>Place order</button>
            </Cart>
            </div>
        </div>
    );
};

export default Review;