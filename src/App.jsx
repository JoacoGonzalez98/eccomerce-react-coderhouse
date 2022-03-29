import React from 'react';
import NavBar from './components/NavBar/NavBar.jsx'
import { CustomButton } from './components/CustomButton/CustomButton.jsx';
import './App.css'
import ItemListContainer from './Containers/ItemList/ItemListContainer'

const App = () => {

    const links= ["link1","link2","link3"];

    return (
        <div style={styles}>
      <NavBar name={name} />
      <ItemListContainer greeting={"Tienda Online"} />
        </div>
    );
      
};

export default App;


const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

