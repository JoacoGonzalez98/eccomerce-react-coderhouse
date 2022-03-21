import React from "react"
import './Header.css'
import logo from './imgs/logotienda.jpg'

const Header = () =>{
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

export default Header