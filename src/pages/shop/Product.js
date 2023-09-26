import React, {useContext} from 'react';

import css from './shop.module.css';
import {ShopContext} from "../../context/shopContext";
const Product = ({product}) => {
    const {id, name, price, productImage} = product;
    const {addToCart,cartItems} = useContext(ShopContext);

    const cartItemAmount = cartItems[id]
    return (
        <div className={css.product}>
            <img src={productImage} alt="avatar"/>
            <div className={css.description}>
                <p>
                    <b>{name}</b>
                </p>
                <p>${price}</p>
            </div>
            <button className={css.addToCartBttn} onClick={()=> addToCart(id)}>
                Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>
        </div>
    );
};

export {Product};