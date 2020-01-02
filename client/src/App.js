import React from 'react';
import {Route} from "react-router-dom"; 
import './App.css';


import Navigation from "./components/Navigation"; 
import Welcome from "./components/Welcome"; 
import Shop from "./components/Shop";
import Showcase from "./components/Showcase";
import Classes from "./components/Classes"; 


function App() {
  return (
    <div className="App">
      <Navigation /> 
      <Route exact path="/" component={Welcome} />
      <Route exact path="/shop" component={Shop} />
            {/* Show each item and clicking on an item-card will send them to etsy... */}
      <Route exact path="/classes" component={Classes} />
        {/* Shows a list of classes and clicking on a class will send them to etsy...for now */}
      <Route exact path="/artwork" component={Showcase} /> 
    </div>
  );
}

export default App;
