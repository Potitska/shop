import React from 'react';
import {Link} from "react-router-dom";
import {ShoppingCart} from 'phosphor-react'

import css from './navbar.module.css'

const Navbar = () => {
    return (
        <div className={css.navbar}>
           <div className={css.links}>
               <Link to='/'>Shop</Link>
               <Link to='/cart'><ShoppingCart size={32}/></Link>
           </div>
        </div>
    );
};

export {Navbar};