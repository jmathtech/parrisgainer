import React, { useState } from "react";
import './App.css';

/* Assets  */
import Menu from '../src/Menu/Menu.jsx';
import Navigation from '../src/Navigation/Navigation.jsx';



const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // State to manage the open/close state of the navigation menu

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };


  return (
    <div className="App">
      <Navigation isNavOpen={isNavOpen} toggleNav={toggleNav} />
      <Menu />
      <header className="App-header">

          Welcome to Parris Gainer
      
      </header>
    </div>
  );
}

export default App;
