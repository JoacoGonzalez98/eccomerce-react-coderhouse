import React from 'react';
import NavBar from './components/NavBar/NavBar.js'
import { CustomButton } from './components/CustomButton/CustomButton.js';
import './App.css'
import Ilc from './containers/Ilc'

const App = () => {
    return (
      <div className="App-Header">
      <NavBar />
      <Ilc greeting={"Boton"}/>
      </div>
    )

}

export default App;

