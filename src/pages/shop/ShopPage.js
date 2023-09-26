import React from 'react';

import css from './shop.module.css';
import {PRODUCTS} from "../../Products";
import {Product} from "./Product";

const ShopPage = () => {
    return (
        <div className={css.shop}>
            <div className={css.shopTitle}>
                <h1>Poti Shop</h1>
            </div>
            <div className={css.products}>{PRODUCTS.map(product=><Product product={product}/>)}</div>
        </div>
    );
};

export {ShopPage};