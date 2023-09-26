import React from 'react';

import css from './app.module.css';
import {Route, Routes} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {ShopPage} from "./pages/shop/ShopPage";
import {CartPage} from "./pages/cart/CartPage";
import {ShopContextProvider} from "./context/shopContext";

const App = () => {
    return (
        <div className={css.App}>
            <ShopContextProvider>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<ShopPage/>}/>
                    <Route path='/cart' element={<CartPage/>}/>
                </Routes>
            </ShopContextProvider>
        </div>
    )
};

export {App};