import React from 'react';
import logo from '../../imgs/logotienda.jpg'
import './NavBar.css'
import { CartWidget } from '../cartwidget/CartWidget';


export const NavBar = () =>{
    return (
        <div>
            <a href='index.html' > <img src={logo} alt="logo"></img></a>
        <h1>Bienvenido a Basyx</h1>
        <nav>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
            </nav>
            <CartWidget />
        </div>
        );
};

export default NavBar;