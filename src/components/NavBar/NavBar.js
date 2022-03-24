import React from 'react';
import logo from '../../imgs/logotienda.jpg'
import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'


export const NavBar = () =>{
    return (
        <div>
            <a href='index.html' > <img src={logo} alt="logo"></img></a>
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