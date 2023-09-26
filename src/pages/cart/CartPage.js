import React, {useContext} from 'react';

import {PRODUCTS} from "../../Products";
import {ShopContext} from "../../context/shopContext";
import css from './cart.module.css';
import {CartItem} from "./CartItem";
import {useNavigate} from "react-router-dom";

const CartPage = () => {

    const {cartItems, getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();

    const navigate = useNavigate();
    return (
        <div className={css.cart}>
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div>
                {PRODUCTS.map(product => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem product={product}/>
                    }
                })}
            </div>
            {totalAmount > 0 ?
                <div className={css.checkout}>
                    <p>Subtotal: ${totalAmount}</p>
                    <button onClick={() => navigate("/")}> Continue Shopping</button>
                    <button> Checkout</button>
                </div>
                : <h1> Your Cart is Empty</h1>}
        </div>
    );
};

export {CartPage};