import React, {useContext} from 'react';

import css from './cart.module.css';
import {ShopContext} from "../../context/shopContext";
const CartItem = ({product}) => {
    const {id, name, price, productImage} = product;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext)

    return (
        <div className={css.cartItem}>
            <img src={productImage}/>
            <div className={css.description}>
                <p>
                    {" "}
                    <b> {name} </b>
                </p>
                <p> ${price}</p>
                <div className={css.countHandler}>
                    <button onClick={()=> removeFromCart(id)}> - </button>
                    <input value={cartItems[id]} onChange={(e)=> updateCartItemCount(Number(e.target.value), id)}/>
                    <button onClick={()=> addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    );
};

export {CartItem};