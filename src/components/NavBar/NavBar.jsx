import React from 'react';
import logo from '../../imgs/logotienda.jpg'
import './NavBar.css'
import { CartWidget } from '../cartwidget/CartWidget';


export const NavBar = ({name}) =>{

    const categorys = [
        { name: "Remeras", route: "#", id: 1 },
        { name: "Jeans", route: "#", id: 2 },
        { name: "Camisas", route: "#", id: 3 },
        { name: "Camperas", route: "#", id: 4 }
      ];

      return (
        <div style={styles.container}>
          <div style={styles.branchContainer}>
          <img style={styles.logo} src={logo} alt="logo" />
          <h1 style={styles.title}>Bienvenido a Barsyx</h1>
          </div>
          <div style={styles.links}>
            <nav>
              {categorys.map((element) => {
                return (
                  <a style={styles.link} key={element.id} href={element.route}>
                    {element.name}
                  </a>
                );
              })}
            </nav>
            <CartWidget />
          </div>
        </div>
        );
};

export default NavBar;