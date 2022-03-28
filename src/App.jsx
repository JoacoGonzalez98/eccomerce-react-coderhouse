import React from 'react';
import NavBar from './components/NavBar/NavBar.jsx'
import { CustomButton } from './components/CustomButton/CustomButton.js';
import './App.css'
import Ilc from './containers/ItemListContainer'

const App = () => {

    const links= ["link1","link2","link3"];

    return (
      <>
      <NavBar />
      <Ilc greeting="Tienda Online"/>
      </>
      
    )

}

export default App;



