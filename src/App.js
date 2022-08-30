import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css';
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {action, trending,documentary} from './urls'


function App(props) {
  return (
<div className="App">
  <NavBar/>
  <Banner/>
  <RowPost url={trending} title='Trending Now'/>
  <RowPost url={action} title='Action' isSmall/>
  <RowPost url={documentary} title='Documentary' isSmall/>


</div> 
 );
}

export default App;
