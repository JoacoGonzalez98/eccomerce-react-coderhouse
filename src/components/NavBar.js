import React from 'react';
import logo from '../imgs/logotienda.jpg'
import './NavBar.css'

const NavBar = () =>{
    return (
        <div>
            <img src={logo} alt="logo"></img>
        <h1>Bienvenido a Basyx</h1>
        <nav>
            <a href="#">Productos</a>
            <a href="#">Ofertas</a>
            <a href="#">Contacto</a>
        </nav>
        </div>
    );
};

export default NavBar;